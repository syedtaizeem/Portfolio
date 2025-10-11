document.addEventListener('DOMContentLoaded', () => {

    const App = {
        data: {
            toolkit: {
                "Core Skills": [
                    { name: 'Python', icon: 'fab fa-python' },
                    { name: 'SQL', icon: 'fas fa-database' },
                    { name: 'R', icon: 'fab fa-r-project' },
                    { name: 'SAS', icon: 'fas fa-cogs' },
                    { name: 'Predictive Modelling', icon: 'fas fa-brain' },
                    { name: 'Forecasting', icon: 'fas fa-wand-magic-sparkles' },
                    { name: 'EDA', icon: 'fas fa-chart-bar' },
                    { name: 'A/B Testing', icon: 'fas fa-vial' },
                    { name: 'Linear Regression', icon: 'fas fa-square-root-variable' },
                ],
                "Business Intelligence & Visualization": [
                    { name: 'Power BI', icon: 'fas fa-chart-bar' },
                    { name: 'Tableau', icon: 'fas fa-chart-pie' },
                    { name: 'Salesforce', icon: 'fab fa-salesforce' },
                    { name: 'Advanced MS Excel', icon: 'fas fa-file-excel' },
                ],
                "Data Engineering & Tools": [
                    { name: 'ETL Pipelines', icon: 'fas fa-stream' },
                    { name: 'Data Validation', icon: 'fas fa-check-double' },
                    { name: 'Data Warehousing', icon: 'fas fa-warehouse' },
                ],
                "Machine Learning & Analytics": [
                    { name: 'Forecasting', icon: 'fas fa-chart-line' },
                    { name: 'Clustering', icon: 'fas fa-circle-nodes' },
                    { name: 'Classification', icon: 'fas fa-tags' },
                    { name: 'Time Series Analysis', icon: 'fas fa-wave-square' },
                ],
                 "Soft Skills": [
                    { name: 'Data Storytelling', icon: 'fas fa-book-open' },
                    { name: 'Stakeholder Management', icon: 'fas fa-users' },
                    { name: 'Strategic Reporting', icon: 'fas fa-lightbulb' },
                    { name: 'Cross-functional Collaboration', icon: 'fas fa-people-arrows' },
                    { name: 'Communication', icon: 'fas fa-comments' },
                ]
            },
            journey: [
                { 
                    id: 'inmode', 
                    type: 'work', 
                    title: 'Sales Operations Analyst Intern (EMEA)', 
                    company: 'InMode UK', 
                    date: 'Jan 2023 – Present', 
                    logo: 'assets/inmode-logo.png',
                    accomplishments: [
                        { category: 'Analytics & Reporting', points: ['Designed Salesforce reports and interactive Power BI dashboards with advanced DAX, achieving a 15% cost reduction and 10% profit increase through improved forecasting and resource allocation.', 'Prepared weekly forecasts, churn, and trend reports, providing actionable insights that guided strategic decision-making and boosted sales performance.', 'Delivered high-level reports to Management, translating complex data into clear, actionable insights.'] },
                        { category: 'Process, Collaboration & Tools', points: ['Maintained Salesforce data integrity, supporting smooth communication between business areas and enabling data-driven decisions.', 'Served as a subject-matter expert for the quote-to-contract process, delivering training and implementing support tools to improve deal quality.', 'Created a centralized knowledge base in SharePoint from scratch, standardizing documentation and ensuring easy access to processes, reports, and best practices across teams.'] },
                        { category: 'Advanced Projects', points: ['Currently developing a machine learning forecasting model for MSc dissertation, applying predictive analytics to enhance sales planning.'] }
                    ] 
                },
                {
                    id: 'shu',
                    type: 'education',
                    title: 'MSc, Big Data Analytics',
                    company: 'Sheffield Hallam University',
                    date: 'Sep 2022 – Jan 2024',
                    logo: 'assets/shu-logo.png',
                    accomplishments: [ 
                        { category: 'Leadership & Representation', points: ['Served as a Course Representative, acting as a key bridge between faculty and the student body to communicate feedback and improve the academic experience.'] },
                        { category: 'Key Modules & Grades', points: [
                            'Programming Concepts and Practice: 8.6',
                            'Data Analytics Tools and Techniques: 7.6',
                            'Advanced Data Management Project: 7.2',
                            'Study Skills for Computing: 6.4'
                        ]},
                        { category: 'Core Coursework', points: ['Specialized in advanced Machine Learning techniques, including deep learning and NLP.', 'Gained hands-on experience with Cloud Computing platforms and big data technologies.', 'Completed coursework in advanced Statistical Modelling and Data Warehousing.'] } 
                    ]
                },
                { 
                    id: 'revolut', 
                    type: 'work', 
                    title: 'Junior Analyst – ID & V', 
                    company: 'Revolut', 
                    date: 'Feb 2022 – Dec 2022', 
                    logo: 'assets/revolut-logo.png', 
                    accomplishments: [ 
                        { category: 'Process Optimization & Collaboration', points: [
                            'Standardized reporting formats and optimized workflows using Jira and Confluence, improving data quality and operational efficiency.',
                            'Collaborated with global teams to design scalable data processes that supported risk analysis and business operations.',
                            'Facilitated cross-team communication to streamline operational procedures and enhance overall compliance adherence.'
                        ]},
                        { category: 'Data Analysis and Reporting', points: [
                            'Extracted, transformed, and validated operational and compliance data with 98%+ accuracy.',
                            'Built real-time dashboards in Power BI and Looker to monitor productivity and operational performance.',
                            'Automated repetitive reporting tasks, reducing manual workload by 20% and improving efficiency.'
                        ]},
                        { category: 'Stakeholder Collaboration & Knowledge Sharing', points: [
                            'Delivered actionable insights to stakeholders, enabling data-driven decisions across risk, compliance, and operations functions.',
                            'Provided guidance and support to team members on reporting tools and dashboards, improving team productivity and understanding of operational metrics.'
                        ]}
                    ]
                }
            ],
            projects: [
                { 
                    id: 'msc-capstone', 
                    image: 'assets/project-capstone.webp', 
                    title: 'Multi-Industry Analytics Sprint', 
                    summary: 'A collection of solutions to critical business problems across four distinct industries: Retail, Real Estate, Insurance, and Finance completed as part of my MSc Big Data Analytics program.', 
                    tags: [
                        {name: 'SAS', icon: 'fas fa-cogs'}, 
                        {name: 'Hypothesis Testing', icon: 'fas fa-vial'}, 
                        {name: 'Regression', icon: 'fas fa-chart-line'}, 
                        {name: 'Business Strategy', icon: 'fas fa-lightbulb'}
                    ], 
                    challenge: 'The core challenge was to simulate a high-pressure consulting environment by embedding into four distinct and unfamiliar industries: Retail, Real Estate, Insurance, and Finance. In each scenario, I was tasked with moving beyond academic theory to solve a pressing business problem under a tight deadline. The goal was to translate ambiguous, real-world questions into a precise analytical strategy and deliver actionable recommendations with clear financial and strategic consequences.', 
                    process: [
                        '**Retail ROI Analysis:** Used Hypothesis Testing (T-tests & Wilcoxon) in SAS to evaluate the financial impact of a new sales training program, providing a clear "Go/No-Go" decision to prevent a costly, ineffective company-wide rollout.',
                        '**Real Estate Investment Modeling:** Built a Multiple Regression model to identify the key drivers of property income. This replaced a slow, subjective survey process with a rapid, data-driven tool for screening potential investments.',
                        '**Insurance Risk Re-engineering:** Diagnosed and corrected a flawed linear model suffering from heteroscedasticity. By applying a log-linear transformation, I created a statistically valid model that accurately priced risk, preventing the company from under-pricing high-risk customers.',
                        '**Financial Services Customer Segmentation:** Employed a Chi-Square test to validate the hypothesis that younger customers posed a higher risk of late loan payments. This provided the statistical certainty needed to develop targeted risk mitigation policies.'
                    ], 
                    outcome: 'This portfolio of projects demonstrates a consistent ability to deliver measurable business value through data. Key impacts include: preventing unnecessary spending on low-ROI initiatives, creating strategic frameworks for smarter investment, mitigating financial exposure by correcting flawed risk models, and informing new policies that reduce default rates.',
                    links: { pdf: 'assets/msc_case_studies.pdf' } 
                },
                { 
                    id: 'atliq-hardware', 
                    image: 'assets/project1.webp', 
                    title: 'AtliQ Hardware - Profitability Analysis', 
                    summary: 'Engineered an end-to-end BI solution to resolve data chaos, enabling leadership to shift from a market-share focus to a sustainable profitability strategy.', 
                    tags: [{name: 'Power BI', icon: 'fas fa-chart-bar'}, {name: 'SQL', icon: 'fas fa-database'}, {name: 'ETL', icon: 'fas fa-retweet'}, {name: 'Data Modelling', icon: 'fas fa-project-diagram'}], 
                    challenge: 'AtliQ Hardware was suffering from "data chaos." All business reporting was spread across disconnected Excel files, leading to outdated insights, poor decisions, and significant financial losses. Leadership had no clear view of the real source of the problems.', 
                    process: ['I consolidated all disparate data into a single, reliable source of truth using SQL and Power BI.', 'I then developed a robust data model and created a suite of interactive dashboards with key metrics for Finance, Sales, and Supply Chain, providing a 360-degree view of the business.'], 
                    outcome: 'The dashboards revealed a hidden truth: despite a 207% increase in sales, the company was highly unprofitable due to excessive operational costs. This data-driven clarity enabled leadership to shift their core strategy from chasing market share to driving sustainable profitability, providing a clear roadmap for financial recovery.',
                    embedCode: `<iframe title="Project" loading="lazy" width="100%" height="450" src="https://app.powerbi.com/view?r=eyJrIjoiZDE4NTBiZWUtOWQ0MC00MWU0LWI0MDktYTNlYzJmMThkOGIxIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9" frameborder="0" allowFullScreen="true"></iframe>`,
                    links: { ppt: 'assets/atliq.pdf' } 
                },
                { 
                    id: 'tfl-transport', 
                    image: 'assets/project2.webp', 
                    title: 'TFL Road Safety Data Warehouse', 
                    summary: 'Analyzed a decade of London collision data by engineering a data warehouse, revealing key risk factors to inform road safety policy.', 
                    tags: [{name: 'R', icon: 'fab fa-r-project'}, {name: 'SQL', icon: 'fas fa-database'}, {name: 'Tableau', icon: 'fas fa-chart-pie'}, {name: 'Data Warehousing', icon: 'fas fa-warehouse'}], 
                    challenge: "The primary goal was to analyze a decade of London's road collision data to enhance road safety. The task required transforming raw, complex government data into a clean data warehouse to identify high-risk areas, understand collision patterns, and provide actionable insights for effective resource allocation and policy-making.", 
                    process: ["Following Ralph Kimball's data warehouse lifecycle, I engineered a robust data pipeline.", "Using R for ETL (Extract, Transform, Load), I cleaned and enriched primary data from the Department for Transport (DfT) with geospatial and statistical data.", "The processed data was stored in a scalable Hadoop/HDFS environment and queried using Hive.", "I designed a Fact Constellation Schema for the data model and used Tableau to create visualizations that answered key business questions."], 
                    outcome: "The analysis revealed critical insights: collisions peak on Fridays in autumn, and high-density central boroughs are the true hotspots. Cars are involved in the most fatal incidents, but motorcycles represent a disproportionate risk. The findings led to targeted, data-driven recommendations, including focusing enforcement in high-risk corridors during peak times, launching a motorcycle safety campaign, enhancing night-time infrastructure in outer boroughs, and implementing weather-responsive alerts to warn drivers of increased risks.",
                    links: { report: 'assets/tfl.pdf' } 
                },
                { 
                    id: 'stroke-prediction', 
                    image: 'assets/project3.webp', 
                    title: 'Stroke Data Analytics & Prediction', 
                    summary: 'Analyzed 170,000+ health records to explore stroke risk factors and built predictive models for healthcare.', 
                    tags: [{name: 'Python', icon: 'fab fa-python'}, {name: 'Pandas', icon: 'fab fa-python'}, {name: 'Scikit-learn', icon: 'fas fa-brain'}, {name: 'ML', icon: 'fas fa-robot'}], 
                    challenge: 'Healthcare providers wanted a reliable method to identify patients at high risk of stroke for early intervention. The project aimed to find significant risk factors and build an accurate predictive model.', 
                    process: ['Performed extensive data cleaning and feature engineering on over 170,000 patient records using Pandas and NumPy.', 'Conducted exploratory data analysis (EDA) to visualize correlations between lifestyle factors and stroke incidence.', 'Trained and evaluated several machine learning classification models (Logistic Regression, Random Forest, XGBoost).'], 
                    outcome: 'The Random Forest model achieved the highest accuracy of 94% in predicting stroke risk. The analysis confirmed that hypertension, high BMI, and smoking were the most significant predictors. The model serves as a proof-of-concept for a clinical decision support tool.',
                    links: { github: 'https://github.com/syedtaizeem/stroke-data-analytics/' } 
                }
            ],
            contactDetails: [
                { type: 'Location', value: 'London, United Kingdom', icon: 'fas fa-map-marker-alt' },
                { type: 'Email', value: 'syedtazeem40@gmail.com', href: 'mailto:syedtazeem40@gmail.com', icon: 'fas fa-envelope' },
                { type: 'Phone', value: '07342 373748', href: 'tel:07342373748', icon: 'fas fa-phone' }
            ]
        },

        init() {
            this.cacheDOMElements();
            this.setupEventListeners();
            this.populateAllSections();
            this.startTypingAnimation();
            this.initIntersectionObserver();
            this.applyInitialTheme();
            this.setupParticleBackground();
        },

        cacheDOMElements() {
            this.elements = {
                navbar: document.getElementById('navbar'),
                scrollProgress: document.getElementById('scroll-progress'),
                themeToggle: document.getElementById('theme-toggle'),
                mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
                navLinks: document.getElementById('nav-links'),
                typingText: document.getElementById('typing-text'),
                toolkitContainer: document.getElementById('toolkit-container'),
                journeyContainer: document.getElementById('journey-container'),
                projectsContainer: document.getElementById('projects-container'),
                contactDetailsContainer: document.getElementById('contact-details'),
                modal: document.getElementById('project-modal'),
                sections: document.querySelectorAll('.section'),
                particleCanvas: document.getElementById('particle-canvas'),
            };
        },

        setupEventListeners() {
            window.addEventListener('scroll', () => this.handleScroll());
            this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
            this.elements.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
            this.elements.navLinks.addEventListener('click', (e) => this.handleNavClick(e));
        },
        
        populateAllSections() {
            this.populateToolkit();
            this.populateJourney();
            this.populateProjects();
            this.populateContactDetails();
            this.setupToolkitInteraction();
            this.setupJourneyInteraction();
            this.setupProjectModal();
        },

        handleScroll() {
            this.elements.navbar.classList.toggle('scrolled', window.scrollY > 50);
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
            this.elements.scrollProgress.style.width = `${scrollPercentage}%`;
        },

        applyInitialTheme() {
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.body.classList.toggle('dark-mode', savedTheme === 'dark');
            this.elements.themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        },

        toggleTheme() {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            this.elements.themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        },

        toggleMobileMenu() {
            const isOpened = this.elements.navLinks.classList.toggle('active');
            this.elements.mobileMenuToggle.setAttribute('aria-expanded', isOpened);
            const icon = this.elements.mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
            document.body.style.overflow = isOpened ? 'hidden' : '';
        },

        handleNavClick(e) {
            if (e.target.tagName === 'A' && this.elements.navLinks.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        },

        startTypingAnimation() {
            if (!this.elements.typingText) return;
            const roles = ['Data Analyst', 'BI Analyst', 'Data Storyteller','Sales Operations Analyst'];
            let roleIndex = 0, charIndex = 0, isDeleting = false;
            const type = () => {
                const currentRole = roles[roleIndex];
                let typeSpeed = isDeleting ? 75 : 150;
                if (!isDeleting && charIndex < currentRole.length) {
                    this.elements.typingText.textContent += currentRole.charAt(charIndex++);
                } else if (isDeleting && charIndex > 0) {
                    this.elements.typingText.textContent = currentRole.substring(0, --charIndex);
                } else {
                    isDeleting = !isDeleting;
                    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
                    typeSpeed = isDeleting ? 2000 : 500;
                }
                setTimeout(type, typeSpeed);
            }
            type();
        },

        initIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    const navLink = this.elements.navLinks.querySelector(`a[href="#${id}"]`);
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        if (navLink) {
                            this.elements.navLinks.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                            navLink.classList.add('active');
                        }
                    }
                });
            }, { rootMargin: '-30% 0px -70% 0px' });
            this.elements.sections.forEach(section => observer.observe(section));
        },

        populateToolkit() {
            if (!this.elements.toolkitContainer) return;
            let html = '';
            let isFirst = true;
            Object.keys(this.data.toolkit).forEach((category) => {
                html += `<details class="toolkit-item" ${isFirst ? 'open' : ''}><summary>${category}</summary><div class="toolkit-grid">`;
                this.data.toolkit[category].forEach((skill, cardIndex) => {
                    html += `<div class="skill-card" style="--delay: ${cardIndex * 30}ms"><i class="${skill.icon}"></i><span>${skill.name}</span></div>`;
                });
                html += `</div></details>`;
                isFirst = false;
            });
            this.elements.toolkitContainer.innerHTML = html;
        },

        setupToolkitInteraction() {
            const { toolkitContainer } = this.elements;
            if (!toolkitContainer) return;
            toolkitContainer.addEventListener('click', (e) => {
                const summary = e.target.closest('summary');
                if (summary) {
                    e.preventDefault();
                    const detailElement = summary.parentElement;
                    if (detailElement.hasAttribute('open')) {
                        detailElement.removeAttribute('open');
                    } else {
                        toolkitContainer.querySelectorAll('details').forEach(d => d.removeAttribute('open'));
                        detailElement.setAttribute('open', '');
                    }
                }
            });
        },
        
        populateJourney() {
            const { journeyContainer } = this.elements;
            if (!journeyContainer) return;
            
            let navHTML = '<div class="journey-nav" role="tablist"><div class="journey-highlighter"></div>';
            let contentHTML = '<div class="journey-content-panel">';
            
            this.data.journey.forEach((item, index) => {
                const typeIcon = item.type === 'work' ? 'fa-briefcase' : 'fa-graduation-cap';
                navHTML += `<button class="journey-nav-item" data-journey-id="${item.id}" role="tab" aria-controls="journey-${item.id}" aria-selected="${index === 0}"><img src="${item.logo}" alt="${item.company} logo" loading="lazy" width="40" height="40"><span>${item.company}</span></button>`;
                
                let accomplishmentsHTML = '';
                if (item.accomplishments && item.accomplishments.length > 0) {
                    item.accomplishments.forEach((group, groupIndex) => {
                        accomplishmentsHTML += `<details class="accomplishment-group" ${groupIndex === 0 ? 'open' : ''}><summary>${group.category}</summary><div class="accomplishment-content">${group.points.map(point => `<div class="accomplishment-item">${point}</div>`).join('')}</div></details>`;
                    });
                }

                contentHTML += `<div class="journey-detail" id="journey-${item.id}" data-journey-id="${item.id}" role="tabpanel"><h3><i class="fas ${typeIcon}"></i> ${item.title}</h3><p class="company">${item.company}</p><p class="date">${item.date}</p><div class="journey-expanders">${accomplishmentsHTML}</div></div>`;
            });
            navHTML += '</div>';
            contentHTML += '</div>';
            journeyContainer.innerHTML = navHTML + contentHTML;

            journeyContainer.querySelector('.journey-nav-item').classList.add('active');
            journeyContainer.querySelector('.journey-detail').classList.add('active');

            setTimeout(() => this.updateJourneyHighlighter(), 100);
        },

        updateJourneyHighlighter() {
            if (window.innerWidth < 768) return; 
            const { journeyContainer } = this.elements;
            const highlighter = journeyContainer.querySelector('.journey-highlighter');
            const activeButton = journeyContainer.querySelector('.journey-nav-item.active');
            if (highlighter && activeButton) {
                highlighter.style.transform = `translateY(${activeButton.offsetTop}px)`;
                highlighter.style.height = `${activeButton.offsetHeight}px`;
            }
        },

        setupJourneyInteraction() {
            const { journeyContainer } = this.elements;
            if (!journeyContainer) return;

            journeyContainer.addEventListener('click', (e) => {
                const button = e.target.closest('.journey-nav-item');
                if (button) {
                    const id = button.dataset.journeyId;
                    journeyContainer.querySelectorAll('.journey-nav-item').forEach(btn => {
                        btn.classList.remove('active');
                        btn.setAttribute('aria-selected', 'false');
                    });
                    button.classList.add('active');
                    button.setAttribute('aria-selected', 'true');
                    
                    this.updateJourneyHighlighter(); 

                    journeyContainer.querySelectorAll('.journey-detail').forEach(detail => detail.classList.remove('active'));
                    const targetDetail = journeyContainer.querySelector(`.journey-detail[data-journey-id="${id}"]`);
                    if (targetDetail) {
                        targetDetail.classList.add('active');
                    }
                }
            });
            window.addEventListener('resize', () => this.updateJourneyHighlighter());
        },
        
        populateProjects() {
            const { projectsContainer } = this.elements;
            if (!projectsContainer) return;
            projectsContainer.innerHTML = this.data.projects.map(project => {
                const tagsHTML = project.tags.map(tag => `<span class="tag"><i class="${tag.icon}"></i> ${tag.name}</span>`).join('');
                let buttonsHTML = `<button class="btn btn-primary" data-project-id="${project.id}"><i class="fas fa-eye"></i> View Case Study</button>`;
                
                const downloadLink = project.links.ppt || project.links.report || project.links.pdf;
                if (downloadLink) {
                    let buttonText = "Download PDF";
                    if (project.id === 'msc-capstone') buttonText = "Download Case Studies";
                    else if (project.links.report) buttonText = "Download Report";
                    
                    buttonsHTML += `<a href="${downloadLink}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" download><i class="fas fa-file-pdf"></i> ${buttonText}</a>`;
                }
                
                return `<div class="project-card"><div class="project-image-wrapper"><img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy" width="1200" height="900"></div><div class="project-content"><h3>${project.title}</h3><p>${project.summary}</p><div class="project-tags">${tagsHTML}</div><div class="project-buttons">${buttonsHTML}</div></div></div>`;
            }).join('');
        },

        populateContactDetails() {
            if (!this.elements.contactDetailsContainer) return;
            this.elements.contactDetailsContainer.innerHTML = this.data.contactDetails.map(detail => {
                const valueHTML = detail.href ? `<a href="${detail.href}">${detail.value}</a>` : `<a>${detail.value}</a>`;
                return `<div class="detail-item"><i class="${detail.icon} icon"></i><div><span>${detail.type}</span>${valueHTML}</div></div>`;
            }).join('');
        },
        
        setupProjectModal() {
            const { projectsContainer, modal } = this.elements;
            if (!projectsContainer || !modal) return;
            let lastFocusedElement;
            const openModal = (projectId) => {
                const project = this.data.projects.find(p => p.id === projectId);
                if (!project) return;
                let linksHTML = '';
                if (project.links) {
                    if (project.links.github) { linksHTML += `<a href="${project.links.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> View on GitHub</a>`; }
                    const downloadLink = project.links.ppt || project.links.report || project.links.pdf;
                    if (downloadLink) {
                        let buttonText = "Download PDF";
                        if (project.id === 'msc-capstone') buttonText = "Download Case Studies";
                        else if (project.links.report) buttonText = "Download Report";
                        linksHTML += `<a href="${downloadLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" download><i class="fas fa-file-pdf"></i> ${buttonText}</a>`;
                    }
                }
                let processHTML = project.process.map(item => `<li>${item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`).join('');
                let modalHTML = `<button class="modal-close-btn" aria-label="Close modal">&times;</button><div class="modal-body"><h2 id="modal-title">${project.title}</h2>${project.embedCode ? `<h4>Interactive Dashboard</h4>${project.embedCode}` : ''}<h4>The Challenge</h4><p>${project.challenge}</p><h4>My Process</h4><ul>${processHTML}</ul><h4>Outcome & Impact</h4><p>${project.outcome}</p><div class="modal-links">${linksHTML}</div></div>`;
                modal.querySelector('.modal-content').innerHTML = modalHTML;
                lastFocusedElement = document.activeElement;
                modal.classList.add('is-open');
                document.body.style.overflow = 'hidden';
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), iframe');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (firstElement) firstElement.focus();
                modal.addEventListener('keydown', function trapFocus(e) {
                    if (e.key !== 'Tab') return;
                    if (e.shiftKey) { if (document.activeElement === firstElement) { lastElement.focus(); e.preventDefault(); } } 
                    else { if (document.activeElement === lastElement) { firstElement.focus(); e.preventDefault(); } }
                });
            };
            const closeModal = () => {
                modal.classList.remove('is-open');
                document.body.style.overflow = 'auto';
                if (lastFocusedElement) lastFocusedElement.focus();
            };
            projectsContainer.addEventListener('click', e => {
                const button = e.target.closest('button[data-project-id]');
                if (button) openModal(button.dataset.projectId);
            });
            modal.addEventListener('click', e => {
                if (e.target.matches('.modal-close-btn') || e.target.matches('.modal-overlay')) closeModal();
            });
            window.addEventListener('keydown', e => {
                if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
            });
        },

        hexToRgb(hex) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
        },

        setupParticleBackground() {
            const canvas = this.elements.particleCanvas;
            const self = this;
            if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                if (canvas) canvas.style.display = 'none'; return;
            }
            const ctx = canvas.getContext('2d');
            let particlesArray;
            class Particle {
                constructor(x, y, dirX, dirY, size) { this.x = x; this.y = y; this.directionX = dirX; this.directionY = dirY; this.size = size; }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim();
                    ctx.fill();
                }
                update() {
                    if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
                    if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
                    let dx = mouse.x - this.x; let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 3; }
                        if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 3; }
                        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 3; }
                        if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 3; }
                    }
                    this.x += this.directionX; this.y += this.directionY;
                    this.draw();
                }
            }
            const setupCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(); };
            const mouse = { x: null, y: null, radius: (window.innerHeight / 100) * (window.innerWidth / 100) };
            window.addEventListener('resize', setupCanvas);
            window.addEventListener('mousemove', (event) => { mouse.x = event.x; mouse.y = event.y; });
            window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
            function initParticles() {
                particlesArray = [];
                let numParticles = window.innerWidth < 768 ? 40 : 80;
                for (let i = 0; i < numParticles; i++) {
                    let size = (Math.random() * 2) + 1;
                    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                    let dirX = (Math.random() * .4) - .2;
                    let dirY = (Math.random() * .4) - .2;
                    particlesArray.push(new Particle(x, y, dirX, dirY, size));
                }
            }
            function connect() {
                let opacity = 1;
                for (let a = 0; a < particlesArray.length; a++) {
                    for (let b = a; b < particlesArray.length; b++) {
                        let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
                        if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                            opacity = 1 - (distance / 20000);
                            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
                            const borderColorHex = getComputedStyle(document.documentElement).getPropertyValue(`--border-color-${currentTheme}`).trim();
                            const borderColorRgb = self.hexToRgb(borderColorHex);
                            if (borderColorRgb) {
                                ctx.strokeStyle = `rgba(${borderColorRgb.r}, ${borderColorRgb.g}, ${borderColorRgb.b}, ${opacity})`;
                            }
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, innerWidth, innerHeight);
                for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); }
                connect();
            }
            setupCanvas();
            animate();
        }
    };

    App.init();
});