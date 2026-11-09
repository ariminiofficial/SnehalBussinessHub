/**
 * Snehal Business Hub — Contact Page Controller (contact.js)
 * Form validation (Name, Indian Mobile, Email, Enquiry Type, Message),
 * spam-resistant client check, prefilled product detection,
 * and direct WhatsApp submission handoff with transparent static explanation.
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById("enquiryForm");
  const productInput = document.getElementById("enquiryProduct");
  const submissionStatus = document.getElementById("formStatusMessage");

  // Check if URL has ?product= parameter
  const urlParams = new URLSearchParams(window.location.search);
  const prefilledProduct = urlParams.get("product");
  if (prefilledProduct && productInput) {
    productInput.value = prefilledProduct;
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset status
    if (submissionStatus) {
      submissionStatus.style.display = "none";
      submissionStatus.innerHTML = "";
    }

    const nameInput = document.getElementById("fullName");
    const phoneInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("emailAddress");
    const typeSelect = document.getElementById("enquiryType");
    const messageInput = document.getElementById("enquiryMessage");

    let isValid = true;

    // Validate Full Name (Min 2 chars)
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, "Please enter your full name.");
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Indian Phone Number: 10 digits starting with 6, 7, 8, or 9
    const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, "").replace(/^91/, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setFieldError(phoneInput, "Please enter a valid 10-digit Indian mobile number.");
      isValid = false;
    } else {
      clearFieldError(phoneInput);
    }

    // Validate Email if provided
    if (emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        setFieldError(emailInput, "Please enter a valid email address.");
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }
    } else {
      clearFieldError(emailInput);
    }

    // Validate Enquiry Type
    if (!typeSelect.value) {
      setFieldError(typeSelect, "Please select an enquiry category.");
      isValid = false;
    } else {
      clearFieldError(typeSelect);
    }

    // Validate Message (Min 5 chars)
    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      setFieldError(messageInput, "Please write a brief message or question.");
      isValid = false;
    } else {
      clearFieldError(messageInput);
    }

    if (!isValid) {
      // Focus on first invalid input
      const firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Prepare Data
    const formData = {
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      enquiryType: typeSelect.options[typeSelect.selectedIndex].text,
      productName: productInput ? productInput.value.trim() : "",
      message: messageInput.value.trim()
    };

    // Construct WhatsApp message
    const waUrl = window.productsCatalog.config.buildFormEnquiryUrl(formData);

    // Show friendly success explanation
    if (submissionStatus) {
      submissionStatus.style.display = "block";
      submissionStatus.className = "opportunity-disclaimer-box";
      submissionStatus.style.background = "#E8F5E9";
      submissionStatus.style.borderColor = "#2E7D32";
      submissionStatus.style.color = "#1B5E20";
      submissionStatus.innerHTML = `
        <h4 style="margin-bottom: 0.35rem; font-size: 1rem; color: #1B5E20;">Opening WhatsApp with your details...</h4>
        <p style="font-size: 0.88rem; line-height: 1.5;">
          Because this is a secure client-side static platform, your enquiry is not stored on a database.
          We are immediately forwarding your message directly to our official WhatsApp helpline at <strong>+91 76662 19432</strong>.
        </p>
        <p style="margin-top: 0.75rem;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            Click here if WhatsApp didn't open automatically
          </a>
        </p>
      `;
    }

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 400);
  });
}

function setFieldError(inputEl, message) {
  inputEl.classList.add("is-invalid");
  let feedback = inputEl.nextElementSibling;
  if (!feedback || !feedback.classList.contains("invalid-feedback")) {
    feedback = document.createElement("div");
    feedback.className = "invalid-feedback";
    inputEl.parentNode.insertBefore(feedback, inputEl.nextSibling);
  }
  feedback.textContent = message;
}

function clearFieldError(inputEl) {
  inputEl.classList.remove("is-invalid");
  const feedback = inputEl.nextElementSibling;
  if (feedback && feedback.classList.contains("invalid-feedback")) {
    feedback.textContent = "";
  }
}
