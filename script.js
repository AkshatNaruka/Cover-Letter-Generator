// Cover letter templates
const templates = {
    professional: `[DATE]

[HIRING_MANAGER]
[COMPANY_NAME]

Dear [GREETING],

I am writing to express my strong interest in the [JOB_TITLE] position at [COMPANY_NAME]. With [EXPERIENCE] years of experience and expertise in [SKILLS], I am confident that I would be a valuable addition to your team.

Throughout my career, I have developed a strong foundation in the skills that are essential for success in this role. My experience has equipped me with a deep understanding of industry best practices and the ability to deliver high-quality results consistently. I am particularly drawn to [COMPANY_NAME] because of its reputation for innovation and commitment to excellence.

In my previous roles, I have successfully:
• Demonstrated proficiency in [SKILLS]
• Collaborated effectively with cross-functional teams
• Delivered projects on time and within budget
• Continuously improved processes and workflows

I am excited about the opportunity to contribute to [COMPANY_NAME]'s continued success and would welcome the chance to discuss how my skills and experience align with your team's needs. Thank you for considering my application.

Sincerely,
[FULL_NAME]
[EMAIL]
[PHONE]
[ADDRESS]`,

    creative: `[DATE]

Hello [COMPANY_NAME] Team!

I'm [FULL_NAME], and I'm incredibly excited about the [JOB_TITLE] opportunity at [COMPANY_NAME]! 

What draws me to this role? It's the perfect blend of my [EXPERIENCE] years of experience and my passion for [SKILLS]. I've been following [COMPANY_NAME]'s journey, and I'm impressed by your innovative approach and creative solutions.

Here's what I bring to the table:
🚀 [EXPERIENCE] years of hands-on experience
💡 Expertise in [SKILLS]
⭐ A track record of turning ideas into reality
🤝 Strong collaboration and communication skills

I believe that great work comes from great teams, and I'm eager to contribute my unique perspective and skills to help [COMPANY_NAME] reach new heights. My approach combines technical expertise with creative problem-solving, which I think would be a perfect fit for your dynamic environment.

I'd love to chat about how we can work together to create something amazing. When can we schedule a conversation?

Looking forward to hearing from you!

Best regards,
[FULL_NAME]
📧 [EMAIL]
📱 [PHONE]
📍 [ADDRESS]`,

    'entry-level': `[DATE]

[HIRING_MANAGER]
[COMPANY_NAME]

Dear [GREETING],

I am writing to apply for the [JOB_TITLE] position at [COMPANY_NAME]. As a motivated professional with [EXPERIENCE] years of experience, I am eager to begin my career journey with your esteemed organization.

Although I may be early in my career, I bring enthusiasm, fresh perspectives, and a strong foundation in [SKILLS]. I am committed to learning and growing within your organization while contributing meaningfully to your team's success.

During my studies and early professional experience, I have:
• Developed strong skills in [SKILLS]
• Demonstrated my ability to learn quickly and adapt to new challenges
• Shown dedication and reliability in all my endeavors
• Built a solid work ethic and professional attitude

I am particularly attracted to [COMPANY_NAME] because of your commitment to nurturing talent and providing growth opportunities. I am excited about the possibility of starting my career with an organization that values innovation and professional development.

I would be thrilled to discuss how my enthusiasm, skills, and fresh perspective can contribute to [COMPANY_NAME]'s continued success. Thank you for considering my application, and I look forward to the opportunity to speak with you.

Sincerely,
[FULL_NAME]
[EMAIL]
[PHONE]
[ADDRESS]`
};

// DOM elements
const templateSelect = document.getElementById('template-select');
const form = document.getElementById('cover-letter-form');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');
const preview = document.getElementById('cover-letter-preview');

// Form field elements
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const companyNameInput = document.getElementById('company-name');
const jobTitleInput = document.getElementById('job-title');
const hiringManagerInput = document.getElementById('hiring-manager');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');

// Event listeners
generateBtn.addEventListener('click', generateCoverLetter);
copyBtn.addEventListener('click', copyToClipboard);
resetBtn.addEventListener('click', resetForm);
templateSelect.addEventListener('change', updateGenerateButton);

// Form validation
form.addEventListener('input', updateGenerateButton);

function updateGenerateButton() {
    const templateSelected = templateSelect.value;
    const requiredFields = form.querySelectorAll('input[required]');
    let allValid = templateSelected && Array.from(requiredFields).every(field => field.value.trim());
    
    generateBtn.disabled = !allValid;
}

function generateCoverLetter() {
    const selectedTemplate = templateSelect.value;
    if (!selectedTemplate || !templates[selectedTemplate]) {
        alert('Please select a valid template.');
        return;
    }

    // Get form data
    const formData = {
        fullName: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        address: addressInput.value.trim(),
        companyName: companyNameInput.value.trim(),
        jobTitle: jobTitleInput.value.trim(),
        hiringManager: hiringManagerInput.value.trim() || 'Hiring Manager',
        experience: experienceInput.value.trim(),
        skills: skillsInput.value.trim()
    };

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'address', 'companyName', 'jobTitle', 'experience', 'skills'];
    for (let field of requiredFields) {
        if (!formData[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
            return;
        }
    }

    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Determine greeting
    const greeting = formData.hiringManager === 'Hiring Manager' 
        ? 'Hiring Manager' 
        : formData.hiringManager;

    // Replace placeholders in template
    let coverLetter = templates[selectedTemplate];
    
    const replacements = {
        '[DATE]': currentDate,
        '[FULL_NAME]': formData.fullName,
        '[EMAIL]': formData.email,
        '[PHONE]': formData.phone,
        '[ADDRESS]': formData.address,
        '[COMPANY_NAME]': formData.companyName,
        '[JOB_TITLE]': formData.jobTitle,
        '[HIRING_MANAGER]': formData.hiringManager === 'Hiring Manager' ? '' : formData.hiringManager,
        '[GREETING]': greeting,
        '[EXPERIENCE]': formData.experience,
        '[SKILLS]': formData.skills
    };

    // Replace all placeholders
    for (const [placeholder, replacement] of Object.entries(replacements)) {
        coverLetter = coverLetter.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
    }

    // Display the generated cover letter
    preview.textContent = coverLetter;
    copyBtn.disabled = false;

    // Scroll to preview section
    preview.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Show success message
    showSuccessMessage('Cover letter generated successfully!');
}

function copyToClipboard() {
    const text = preview.textContent;
    
    if (!text || text === 'Select a template and fill in your information to see your cover letter here.') {
        alert('No cover letter to copy. Please generate one first.');
        return;
    }

    // Create a temporary textarea to copy text
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showSuccessMessage('Cover letter copied to clipboard!');
        } else {
            // Fallback for modern browsers
            navigator.clipboard.writeText(text).then(() => {
                showSuccessMessage('Cover letter copied to clipboard!');
            }).catch(() => {
                alert('Failed to copy to clipboard. Please select and copy the text manually.');
            });
        }
    } catch (err) {
        // Additional fallback
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showSuccessMessage('Cover letter copied to clipboard!');
            }).catch(() => {
                alert('Failed to copy to clipboard. Please select and copy the text manually.');
            });
        } else {
            alert('Copy to clipboard not supported. Please select and copy the text manually.');
        }
    }

    document.body.removeChild(tempTextarea);
}

function resetForm() {
    if (confirm('Are you sure you want to reset the form? This will clear all your information.')) {
        form.reset();
        templateSelect.value = '';
        preview.innerHTML = '<p>Select a template and fill in your information to see your cover letter here.</p>';
        copyBtn.disabled = true;
        generateBtn.disabled = true;
        
        // Remove any success messages
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showSuccessMessage(message) {
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;

    // Insert before the preview
    const previewSection = document.querySelector('.preview-section h2');
    previewSection.parentNode.insertBefore(successDiv, previewSection.nextSibling);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 5000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateGenerateButton();
    
    // Add some helpful placeholder text
    const placeholders = {
        'full-name': 'John Smith',
        'email': 'john.smith@email.com',
        'phone': '+1 (555) 123-4567',
        'address': '123 Main St, City, State 12345',
        'company-name': 'ABC Corporation',
        'job-title': 'Software Developer',
        'hiring-manager': 'Sarah Johnson',
        'skills': 'JavaScript, React, Node.js, Python'
    };

    for (const [id, placeholder] of Object.entries(placeholders)) {
        const element = document.getElementById(id);
        if (element && !element.placeholder) {
            element.placeholder = placeholder;
        }
    }
});