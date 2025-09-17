// Configure PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            // Track tab usage for analytics (optional)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'tab_switch', {
                    'tab_name': targetTab
                });
            }
        });
    });
}

// Initialize tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTabs);

// Bullet point styles configuration
const bulletStyles = {
    'unicode': '•',
    'dash': '-',
    'asterisk': '*',
    'arrow': '→',
    'number': '1.',
    'letter': 'a)'
};

// Current bullet style (can be changed by user)
let currentBulletStyle = 'unicode';

// Function to replace bullet points with selected style
function applyBulletStyle(text, style = currentBulletStyle) {
    const bulletChar = bulletStyles[style] || bulletStyles.unicode;
    
    // Replace Unicode bullet points with the selected style
    if (style === 'number') {
        let counter = 1;
        return text.replace(/•/g, () => `${counter++}.`);
    } else if (style === 'letter') {
        let counter = 1;
        return text.replace(/•/g, () => {
            const letter = String.fromCharCode(96 + counter); // 'a', 'b', 'c', etc.
            counter++;
            return `${letter})`;
        });
    } else {
        return text.replace(/•/g, bulletChar);
    }
}

// Function to calculate and update cover letter statistics
function updateCoverLetterStats(text) {
    if (!text || text === 'Select a template and fill in your information to see your cover letter here.') {
        statsSection.style.display = 'none';
        return;
    }
    
    // Calculate word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Calculate character count (excluding spaces)
    const charCount = text.replace(/\s/g, '').length;
    
    // Calculate reading time (average 200 words per minute)
    const readingTimeMinutes = Math.ceil(wordCount / 200);
    
    // Update UI
    wordCountElement.textContent = wordCount;
    charCountElement.textContent = charCount;
    readingTimeElement.textContent = `${readingTimeMinutes} min`;
    
    statsSection.style.display = 'flex';
}

// Enhanced text processing for better encoding
function sanitizeText(text) {
    // Ensure proper UTF-8 encoding and handle special characters
    return text
        .replace(/[\u2018\u2019]/g, "'") // Replace smart quotes with regular quotes
        .replace(/[\u201C\u201D]/g, '"') // Replace smart double quotes
        .replace(/\u2013/g, '-') // Replace en-dash
        .replace(/\u2014/g, '--') // Replace em-dash
        .replace(/\u2026/g, '...'); // Replace ellipsis
}

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
[ADDRESS]`,

    modern: `[DATE]

[HIRING_MANAGER]
[COMPANY_NAME]

Subject: Application for [JOB_TITLE] Position

Hi [GREETING],

I'm reaching out because the [JOB_TITLE] role at [COMPANY_NAME] perfectly aligns with my [EXPERIENCE] years of experience in [SKILLS]. Your company's innovative approach and commitment to excellence immediately caught my attention.

What I bring to your team:

EXPERIENCE & EXPERTISE
→ [EXPERIENCE] years of proven success in relevant roles
→ Deep knowledge in [SKILLS]
→ Track record of delivering results that matter

VALUE PROPOSITION
→ Strategic thinking combined with hands-on execution
→ Collaborative approach that drives team performance
→ Continuous learning mindset that embraces new challenges

CULTURAL FIT
→ Passion for innovation and quality
→ Strong communication and problem-solving abilities
→ Commitment to contributing to [COMPANY_NAME]'s mission

I'm excited about the possibility of joining your team and contributing to [COMPANY_NAME]'s continued growth. I'd welcome the opportunity to discuss how my background and enthusiasm can add value to your organization.

Best regards,
[FULL_NAME]
[EMAIL] | [PHONE]
[ADDRESS]`,

    academic: `[DATE]

[HIRING_MANAGER]
[COMPANY_NAME]

Dear [GREETING],

I am writing to express my interest in the [JOB_TITLE] position at [COMPANY_NAME]. With [EXPERIENCE] years of experience in research and academia, combined with expertise in [SKILLS], I am eager to contribute to your institution's scholarly mission.

My academic background has provided me with:
• Strong analytical and research capabilities
• Experience in peer-reviewed publication and presentation
• Proficiency in [SKILLS] and related methodologies
• Commitment to rigorous academic standards and ethical practices

Throughout my career, I have demonstrated:
→ Research Excellence: Successfully completed projects resulting in meaningful contributions to the field
→ Teaching & Mentorship: Guided students and colleagues in academic and professional development
→ Collaboration: Worked effectively with interdisciplinary teams and international partners
→ Grant Writing: Secured funding for research initiatives and academic programs

I am particularly drawn to [COMPANY_NAME] because of your reputation for academic excellence and commitment to advancing knowledge in the field. I believe my research experience in [SKILLS] and dedication to scholarly inquiry would be valuable assets to your team.

I would welcome the opportunity to discuss how my academic background and research expertise can contribute to [COMPANY_NAME]'s continued success in advancing education and research.

Sincerely,
[FULL_NAME]
[EMAIL]
[PHONE]
[ADDRESS]`,

    sales: `[DATE]

[HIRING_MANAGER]
[COMPANY_NAME]

Dear [GREETING],

I'm excited to apply for the [JOB_TITLE] position at [COMPANY_NAME]! With [EXPERIENCE] years of proven sales success and expertise in [SKILLS], I'm ready to drive results and exceed your revenue goals.

MY TRACK RECORD:
✅ [EXPERIENCE] years of consistent quota achievement
✅ Expertise in [SKILLS] and relationship building
✅ Strong pipeline management and closing abilities
✅ Experience with CRM systems and sales analytics

WHAT I BRING:
🎯 Results-driven approach with focus on customer success
🤝 Natural relationship builder who creates lasting partnerships
📈 Strategic thinker who identifies growth opportunities
💪 Resilient performer who thrives in competitive environments

WHY [COMPANY_NAME]?
Your reputation for innovation and customer-centric approach aligns perfectly with my sales philosophy. I'm particularly impressed by your recent market expansion and would love to contribute to your continued growth.

NEXT STEPS:
I'm confident in my ability to contribute immediately to your sales team's success. I'd welcome the opportunity to discuss specific strategies for the [JOB_TITLE] role and share how my experience can help [COMPANY_NAME] achieve its sales objectives.

Ready to make an impact,
[FULL_NAME]
[EMAIL] | [PHONE]
[ADDRESS]

P.S. I've already researched your key competitors and have some ideas for capturing additional market share – let's talk!`
};

// DOM elements
const templateSelect = document.getElementById('template-select');
const bulletStyleSelect = document.getElementById('bullet-style-select');
const templatePreview = document.getElementById('template-preview');
const templatePreviewContent = document.getElementById('template-preview-content');
const themeToggle = document.getElementById('theme-toggle');
const form = document.getElementById('cover-letter-form');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const downloadTxtBtn = document.getElementById('download-txt-btn');
const preview = document.getElementById('cover-letter-preview');

// Stats elements
const statsSection = document.getElementById('cover-letter-stats');
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');
const readingTimeElement = document.getElementById('reading-time');

// Resume upload elements
const resumeUpload = document.getElementById('resume-upload');
const fileUploadText = document.getElementById('file-upload-text');
const uploadStatus = document.getElementById('upload-status');

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
downloadPdfBtn.addEventListener('click', downloadPDF);
downloadTxtBtn.addEventListener('click', () => downloadAsTextFile(preview.textContent));
templateSelect.addEventListener('change', handleTemplateChange);
bulletStyleSelect.addEventListener('change', handleBulletStyleChange);
themeToggle.addEventListener('click', toggleTheme);
resumeUpload.addEventListener('change', handleResumeUpload);

// Add drag and drop functionality
const fileUploadLabel = document.querySelector('.file-upload-label');
fileUploadLabel.addEventListener('dragover', handleDragOver);
fileUploadLabel.addEventListener('dragleave', handleDragLeave);
fileUploadLabel.addEventListener('drop', handleDrop);

// Form validation
form.addEventListener('input', handleFormInput);

// Bullet style change handler
function handleBulletStyleChange() {
    currentBulletStyle = bulletStyleSelect.value;
    
    // Update template preview if a template is selected
    if (templateSelect.value) {
        handleTemplateChange();
    }
    
    // Regenerate cover letter if it exists
    const currentPreview = preview.textContent;
    if (currentPreview && currentPreview !== 'Select a template and fill in your information to see your cover letter here.') {
        generateCoverLetter();
    }
    
    // Save to local storage
    localStorage.setItem('bulletStyle', currentBulletStyle);
}

// Template preview functionality
function handleTemplateChange() {
    const selectedTemplate = templateSelect.value;
    
    if (selectedTemplate && templates[selectedTemplate]) {
        // Show preview
        templatePreview.style.display = 'block';
        
        // Get a preview of the template with placeholder text
        let previewText = templates[selectedTemplate]
            .replace('[DATE]', 'March 15, 2024')
            .replace(/\[FULL_NAME\]/g, 'John Smith')
            .replace(/\[EMAIL\]/g, 'john.smith@email.com')
            .replace(/\[PHONE\]/g, '+1 (555) 123-4567')
            .replace(/\[ADDRESS\]/g, '123 Main St, City, State 12345')
            .replace(/\[COMPANY_NAME\]/g, 'ABC Corporation')
            .replace(/\[JOB_TITLE\]/g, 'Software Developer')
            .replace(/\[HIRING_MANAGER\]/g, 'Sarah Johnson')
            .replace(/\[GREETING\]/g, 'Ms. Johnson')
            .replace(/\[EXPERIENCE\]/g, '3')
            .replace(/\[SKILLS\]/g, 'JavaScript, React, Node.js');
        
        // Limit preview to first 500 characters
        if (previewText.length > 500) {
            previewText = previewText.substring(0, 500) + '...';
        }
        
        // Apply bullet styling to preview
        previewText = applyBulletStyle(previewText, currentBulletStyle);
        
        templatePreviewContent.textContent = previewText;
    } else {
        templatePreview.style.display = 'none';
    }
    
    updateGenerateButton();
}

// Form input handler with local storage
function handleFormInput(e) {
    updateGenerateButton();
    saveFormData();
}

function updateGenerateButton() {
    const templateSelected = templateSelect.value;
    const requiredFields = form.querySelectorAll('input[required]');
    let allValid = templateSelected && Array.from(requiredFields).every(field => field.value.trim());
    
    generateBtn.disabled = !allValid;
}

// Local storage functionality
function saveFormData() {
    const formData = {
        template: templateSelect.value,
        bulletStyle: currentBulletStyle,
        fullName: fullNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        companyName: companyNameInput.value,
        jobTitle: jobTitleInput.value,
        hiringManager: hiringManagerInput.value,
        experience: experienceInput.value,
        skills: skillsInput.value
    };
    
    localStorage.setItem('coverLetterData', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('coverLetterData');
    if (savedData) {
        try {
            const formData = JSON.parse(savedData);
            
            templateSelect.value = formData.template || '';
            bulletStyleSelect.value = formData.bulletStyle || 'unicode';
            currentBulletStyle = formData.bulletStyle || 'unicode';
            fullNameInput.value = formData.fullName || '';
            emailInput.value = formData.email || '';
            phoneInput.value = formData.phone || '';
            addressInput.value = formData.address || '';
            companyNameInput.value = formData.companyName || '';
            jobTitleInput.value = formData.jobTitle || '';
            hiringManagerInput.value = formData.hiringManager || '';
            experienceInput.value = formData.experience || '';
            skillsInput.value = formData.skills || '';
            
            handleTemplateChange(); // Update template preview
        } catch (e) {
            console.log('Error loading saved data:', e);
        }
    }
    
    // Load saved bullet style separately if available
    const savedBulletStyle = localStorage.getItem('bulletStyle');
    if (savedBulletStyle && bulletStyles[savedBulletStyle]) {
        currentBulletStyle = savedBulletStyle;
        bulletStyleSelect.value = savedBulletStyle;
    }
}

// Dark mode functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
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

    // Apply bullet point styling and text sanitization
    coverLetter = applyBulletStyle(coverLetter, currentBulletStyle);
    coverLetter = sanitizeText(coverLetter);

    // Display the generated cover letter
    preview.textContent = coverLetter;
    copyBtn.disabled = false;
    downloadPdfBtn.disabled = false;
    downloadTxtBtn.disabled = false;
    
    // Update statistics
    updateCoverLetterStats(coverLetter);

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

    // Enhanced UTF-8 safe copy with better encoding handling
    const copyText = async (textToCopy) => {
        // First try the modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                // Ensure proper UTF-8 encoding
                const encodedText = sanitizeText(textToCopy);
                await navigator.clipboard.writeText(encodedText);
                showSuccessMessage('Cover letter copied to clipboard!');
                return true;
            } catch (err) {
                console.log('Clipboard API failed, trying fallback:', err);
            }
        }
        
        // Fallback method with better encoding support
        const textArea = document.createElement('textarea');
        textArea.value = sanitizeText(textToCopy);
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (successful) {
                showSuccessMessage('Cover letter copied to clipboard!');
                return true;
            } else {
                throw new Error('execCommand copy failed');
            }
        } catch (err) {
            document.body.removeChild(textArea);
            console.error('Copy failed:', err);
            return false;
        }
    };

    // Execute copy with fallback handling
    copyText(text).then((success) => {
        if (!success) {
            // Ultimate fallback - show text in a modal for manual copy
            showTextModal(text);
        }
    }).catch(() => {
        showTextModal(text);
    });
}

// Function to show text in a modal for manual copying
function showTextModal(text) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--card-bg);
        padding: 20px;
        border-radius: 10px;
        max-width: 80%;
        max-height: 80%;
        overflow: auto;
        position: relative;
    `;
    
    const title = document.createElement('h3');
    title.textContent = 'Copy Text Manually';
    title.style.marginBottom = '15px';
    
    const textarea = document.createElement('textarea');
    textarea.value = sanitizeText(text);
    textarea.style.cssText = `
        width: 100%;
        height: 300px;
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        font-family: monospace;
        font-size: 14px;
        resize: vertical;
    `;
    textarea.select();
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = `
        margin-top: 10px;
        padding: 8px 16px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    closeBtn.onclick = () => document.body.removeChild(modal);
    
    modalContent.appendChild(title);
    modalContent.appendChild(textarea);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

function resetForm() {
    if (confirm('Are you sure you want to reset the form? This will clear all your information.')) {
        form.reset();
        templateSelect.value = '';
        bulletStyleSelect.value = 'unicode';
        currentBulletStyle = 'unicode';
        templatePreview.style.display = 'none';
        preview.innerHTML = '<p>Select a template and fill in your information to see your cover letter here.</p>';
        copyBtn.disabled = true;
        downloadPdfBtn.disabled = true;
        downloadTxtBtn.disabled = true;
        generateBtn.disabled = true;
        statsSection.style.display = 'none';
        
        // Reset resume upload
        resumeUpload.value = '';
        fileUploadText.textContent = 'Choose file or drag & drop';
        uploadStatus.style.display = 'none';
        
        // Clear local storage
        localStorage.removeItem('coverLetterData');
        localStorage.removeItem('bulletStyle');
        
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

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Resume upload and parsing functionality
async function handleResumeUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Update UI
    fileUploadText.textContent = file.name;
    showUploadStatus('processing', 'Processing resume...');

    try {
        let text = '';
        
        if (file.type === 'application/pdf') {
            if (typeof pdfjsLib !== 'undefined') {
                text = await extractTextFromPDF(file);
            } else {
                showUploadStatus('error', 'PDF processing library not loaded. Please refresh and try again, or fill the form manually.');
                return;
            }
        } else if (file.type.includes('word') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
            showUploadStatus('error', 'Word documents not yet supported. Please upload a PDF version of your resume.');
            return;
        } else {
            showUploadStatus('error', 'Unsupported file format. Please upload a PDF file.');
            return;
        }

        if (text.trim()) {
            const extractedData = parseResumeText(text);
            populateFormFromResume(extractedData);
            showUploadStatus('success', 'Resume processed successfully! Information has been auto-filled.');
        } else {
            showUploadStatus('error', 'Could not extract text from resume. Please try again or fill the form manually.');
        }
    } catch (error) {
        console.error('Error processing resume:', error);
        showUploadStatus('error', 'Error processing resume. Please try again or fill the form manually.');
    }
}

async function extractTextFromPDF(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = async function() {
            try {
                const typedarray = new Uint8Array(this.result);
                const pdf = await pdfjsLib.getDocument(typedarray).promise;
                let fullText = '';

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map(item => item.str).join(' ');
                    fullText += pageText + ' ';
                }

                resolve(fullText);
            } catch (error) {
                reject(error);
            }
        };
        fileReader.onerror = reject;
        fileReader.readAsArrayBuffer(file);
    });
}

function parseResumeText(text) {
    const extractedData = {
        name: '',
        email: '',
        phone: '',
        skills: [],
        experience: 0
    };

    // Extract email using regex
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emailMatch = text.match(emailRegex);
    if (emailMatch) {
        extractedData.email = emailMatch[0];
    }

    // Extract phone number using regex
    const phoneRegex = /(\+?1?[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const phoneMatch = text.match(phoneRegex);
    if (phoneMatch) {
        extractedData.phone = phoneMatch[0];
    }

    // Extract name (usually at the beginning, before contact info)
    const lines = text.split('\n').filter(line => line.trim());
    for (let i = 0; i < Math.min(5, lines.length); i++) {
        const line = lines[i].trim();
        // Look for a line that might be a name (2-4 words, no numbers, not an email)
        if (line && 
            !emailRegex.test(line) && 
            !phoneRegex.test(line) && 
            !/\d/.test(line) && 
            line.split(' ').length >= 2 && 
            line.split(' ').length <= 4 &&
            line.length < 50) {
            extractedData.name = line;
            break;
        }
    }

    // Extract skills - look for common skill keywords
    const skillKeywords = [
        'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS', 'SQL', 'MongoDB',
        'AWS', 'Docker', 'Kubernetes', 'Git', 'Angular', 'Vue.js', 'TypeScript', 'C++', 'C#',
        'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin', 'Flutter', 'React Native', 'Express.js',
        'Django', 'Flask', 'Spring', 'Laravel', 'WordPress', 'Shopify', 'Salesforce',
        'Project Management', 'Leadership', 'Communication', 'Problem Solving', 'Team Leadership',
        'Agile', 'Scrum', 'DevOps', 'CI/CD', 'Testing', 'Debugging', 'Data Analysis',
        'Machine Learning', 'AI', 'Data Science', 'Analytics', 'Marketing', 'SEO', 'SEM',
        'Social Media', 'Content Marketing', 'Graphic Design', 'UI/UX', 'Figma', 'Adobe',
        'Photoshop', 'Illustrator', 'Excel', 'PowerPoint', 'Tableau', 'Power BI'
    ];

    const textUpper = text.toUpperCase();
    const foundSkills = skillKeywords.filter(skill => 
        textUpper.includes(skill.toUpperCase())
    );
    extractedData.skills = [...new Set(foundSkills)]; // Remove duplicates

    // Estimate years of experience
    const experienceRegex = /(\d+)[\s\+]*(?:years?|yrs?)\s*(?:of\s*)?(?:experience|exp)/gi;
    const experienceMatches = text.match(experienceRegex);
    if (experienceMatches) {
        const numbers = experienceMatches.map(match => {
            const num = match.match(/\d+/);
            return num ? parseInt(num[0]) : 0;
        });
        extractedData.experience = Math.max(...numbers);
    } else {
        // Try to estimate based on employment history dates
        const yearRegex = /20\d{2}/g;
        const years = text.match(yearRegex);
        if (years && years.length >= 2) {
            const sortedYears = years.map(y => parseInt(y)).sort((a, b) => a - b);
            const experienceYears = sortedYears[sortedYears.length - 1] - sortedYears[0];
            if (experienceYears > 0 && experienceYears < 50) {
                extractedData.experience = experienceYears;
            }
        }
    }

    return extractedData;
}

function populateFormFromResume(data) {
    if (data.name) {
        fullNameInput.value = data.name;
    }
    if (data.email) {
        emailInput.value = data.email;
    }
    if (data.phone) {
        phoneInput.value = data.phone;
    }
    if (data.skills.length > 0) {
        skillsInput.value = data.skills.join(', ');
    }
    if (data.experience > 0) {
        experienceInput.value = data.experience;
    }

    // Trigger form validation update
    updateGenerateButton();
    saveFormData();
}

function showUploadStatus(type, message) {
    uploadStatus.className = `upload-status ${type}`;
    uploadStatus.textContent = message;
}

// Drag and drop handlers
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        resumeUpload.files = files;
        handleResumeUpload({ target: { files: files } });
    }
}

// PDF Download functionality
function downloadPDF() {
    const text = preview.textContent;
    
    if (!text || text === 'Select a template and fill in your information to see your cover letter here.') {
        alert('No cover letter to download. Please generate one first.');
        return;
    }

    // Check if jsPDF is available
    if (typeof window.jspdf === 'undefined' || !window.jspdf.jsPDF) {
        // Fallback: Create a text file download
        downloadAsTextFile(text);
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Set font for better Unicode support
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);

        // Page margins
        const margin = 20;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const textWidth = pageWidth - (margin * 2);
        const lineHeight = 6;

        // Sanitize text for PDF generation
        const sanitizedText = sanitizeText(text);
        
        // Split text into lines with better handling of special characters
        const lines = doc.splitTextToSize(sanitizedText, textWidth);
        let y = margin;

        // Add lines to PDF
        for (let i = 0; i < lines.length; i++) {
            if (y + lineHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
            // Ensure text is properly encoded
            const line = lines[i].replace(/[^\x00-\x7F]/g, function(char) {
                // Replace any remaining problematic characters with safe alternatives
                switch(char) {
                    case '•': return '* ';
                    case '→': return '-> ';
                    case '\u201C': return '"';  // Left double quotation mark
                    case '\u201D': return '"';  // Right double quotation mark
                    case '\u2018': return "'";  // Left single quotation mark
                    case '\u2019': return "'";  // Right single quotation mark
                    default: return char;
                }
            });
            doc.text(line, margin, y);
            y += lineHeight;
        }

        // Generate filename
        const companyName = companyNameInput.value || 'Company';
        const jobTitle = jobTitleInput.value || 'Position';
        const filename = `Cover_Letter_${companyName}_${jobTitle}.pdf`.replace(/[^a-zA-Z0-9]/g, '_');

        // Download the PDF
        doc.save(filename);
        showSuccessMessage('PDF downloaded successfully!');
    } catch (error) {
        console.error('Error generating PDF:', error);
        // Fallback to text file
        downloadAsTextFile(text);
    }
}

// Fallback function to download as text file
function downloadAsTextFile(text) {
    try {
        const companyName = companyNameInput.value || 'Company';
        const jobTitle = jobTitleInput.value || 'Position';
        const filename = `Cover_Letter_${companyName}_${jobTitle}.txt`.replace(/[^a-zA-Z0-9]/g, '_');
        
        // Ensure proper UTF-8 encoding with BOM for better compatibility
        const sanitizedText = sanitizeText(text);
        const utf8BOM = '\uFEFF';
        const textWithBOM = utf8BOM + sanitizedText;
        
        const blob = new Blob([textWithBOM], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showSuccessMessage('Cover letter downloaded as text file! (PDF library not available)');
    } catch (error) {
        console.error('Error downloading file:', error);
        alert('Error downloading file. Please copy the text instead.');
    }
}

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
                
                console.log(`Page Load Time: ${loadTime}ms`);
                console.log(`DOM Content Loaded: ${domContentLoaded}ms`);
                
                // Track Core Web Vitals if available
                if ('PerformanceObserver' in window) {
                    try {
                        const observer = new PerformanceObserver((list) => {
                            list.getEntries().forEach((entry) => {
                                if (entry.entryType === 'largest-contentful-paint') {
                                    console.log(`LCP: ${entry.startTime}ms`);
                                } else if (entry.entryType === 'first-input') {
                                    console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
                                }
                            });
                        });
                        
                        observer.observe({entryTypes: ['largest-contentful-paint', 'first-input']});
                    } catch (e) {
                        // PerformanceObserver not supported
                    }
                }
            }, 0);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Track performance
    trackPerformance();
    
    // Initialize theme
    initializeTheme();
    
    // Load saved form data
    loadFormData();
    
    // Update generate button state
    updateGenerateButton();
    
    // Initialize FAQ
    initializeFAQ();
    
    // Add some helpful placeholder text (if not already set)
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
    
    // Add loading indicator for better UX
    generateBtn.innerHTML = generateBtn.disabled ? 'Select template and fill form' : 'Generate Cover Letter';
    
    // Update generate button text based on form state
    const updateButtonText = () => {
        if (!templateSelect.value) {
            generateBtn.innerHTML = 'Select a template first';
        } else if (generateBtn.disabled) {
            generateBtn.innerHTML = 'Fill in all required fields';
        } else {
            generateBtn.innerHTML = 'Generate Cover Letter';
        }
    };
    
    templateSelect.addEventListener('change', updateButtonText);
    form.addEventListener('input', updateButtonText);
    updateButtonText();
    
    // Analytics tracking (placeholder for future implementation)
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'Cover Letter Generator',
            page_location: window.location.href
        });
    }
});