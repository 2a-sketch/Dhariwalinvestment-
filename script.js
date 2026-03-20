/* ========================================
   DHARIWAL INVESTMENTS — INTERACTIVITY
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== LANGUAGE / i18n SYSTEM =====
    const translations = {
        en: {
            // Navbar
            nav_services: 'Services', nav_whyus: 'Why Us', nav_testimonials: 'Testimonials', nav_careers: 'Start Your Career',
            nav_contact: 'Contact', nav_cta: 'Book Free Consultation',
            // Hero
            hero_badge: '<i class="fas fa-shield-halved"></i> SEBI Registered &bull; IRDAI Certified',
            hero_title: 'Secure Your Future with<br><span class="gradient-text">Trusted</span> Insurance &amp; <span class="gradient-text">Investment</span> Solutions',
            hero_subtitle: '25+ Years of Experience &nbsp;|&nbsp; 6000+ Happy Clients',
            hero_trust1: '25+ Years Experience', hero_trust2: '6000+ Clients Served', hero_trust3: 'Trusted Financial Advisor',
            hero_cta1: '<i class="fas fa-calendar-check"></i> Get Free Consultation',
            hero_cta3: '<i class="fas fa-arrow-right"></i> Explore Services',
            hero_cta2: '<i class="fab fa-whatsapp"></i> Chat on WhatsApp',
            hero_insured: 'Insured', hero_scroll: 'Scroll',
            // Achievements
            ach_badge: 'Award Winning', ach_tag: 'Our Track Record',
            ach_title: 'Proven <span class="gradient-text">Achievements</span>',
            ach_desc: 'Decades of trust, thousands of satisfied clients, and a legacy of financial excellence.',
            ach_years: 'Years Experience', ach_clients: 'Happy Clients', ach_policies: 'Insurance Policies', ach_agents: 'Agents',
            ach_trust_banner: 'Trusted Financial Advisor — SEBI Registered & IRDAI Certified',
            // Services
            svc_tag: 'What We Offer', svc_title: 'Comprehensive Financial <span class="gradient-text">Solutions</span>',
            svc_desc: 'From wealth creation to protection — we cover every aspect of your financial journey.',
            svc_mf_title: 'Mutual Funds', svc_mf_desc: 'Diversified mutual fund portfolios curated by experts to maximize your returns while managing risk.',
            svc_ins_title: 'Life & Health Insurance', svc_ins_desc: 'Comprehensive life, health, and term insurance plans to protect you and your loved ones.',
            svc_sip_title: 'SIP Planning', svc_sip_desc: 'Systematic Investment Plans designed to build long-term wealth through disciplined, regular investing.',
            svc_veh_title: 'Vehicle Insurance', svc_veh_desc: 'Comprehensive motor insurance for your cars and two-wheelers, covering accidents, theft, and third-party liabilities.',
            svc_ret_title: 'Retirement Planning', svc_ret_desc: 'Customized retirement strategies to ensure financial freedom and a comfortable life after retirement.',
            svc_re_title: 'Real Estate Investment', svc_re_desc: 'Expert guidance and curated opportunities in high-growth residential and commercial real estate projects.',
            svc_learn: 'Learn More <i class="fas fa-arrow-right"></i>',
            // Why Us
            why_tag: 'Why Dhariwal Investments', why_title: 'Built on <span class="gradient-text">Trust & Expertise</span>',
            why_desc: 'We bring decades of experience, certified expertise, and a client-first approach to every relationship.',
            why1_title: 'Experienced financial advisor', why1_desc: 'Decades of expertise in navigating complex financial markets with a proven track record of success.',
            why2_title: 'Personalized financial planning', why2_desc: 'Tailored strategies designed around your unique life goals, risk appetite, and future aspirations.',
            why3_title: 'Transparent guidance', why3_desc: 'Clear, honest advice with no hidden agendas, ensuring you make informed decisions with absolute confidence.',
            why4_title: 'Long-term client relationships', why4_desc: 'We grow with you, providing consistent support and evolving plans for every stage of your financial journey.',
            // Testimonials
            test_tag: 'Client Stories', test_title: 'Trusted by <span class="gradient-text">Thousands</span>',
            test_desc: 'Hear from clients who transformed their financial future with Dhariwal Investments.',
            review_title: 'Share Your Experience', review_submit: 'Submit Review',
            // Career
            cr_tag: 'Start Your Career', cr_title: 'Start Your Career in Finance with <span class="gradient-text">Zero Experience</span>',
            cr_desc: 'Join Dhariwal Investments as an LIC Insurance Advisor. We provide full training, support, and the platform you need to build a flexible, high-income career in the financial sector.',
            cr_b1: 'No prior experience required', cr_b2: 'Complete training provided from basics',
            cr_b3: 'Flexible working (part-time / full-time)', cr_b4: 'Opportunity to earn a handsome income',
            cr_b5: 'Work with a trusted financial advisory firm', cr_b6: 'Long-term career growth in finance',
            cr_btn1: 'Apply Now', cr_btn2: '<i class="fab fa-whatsapp"></i> Talk on WhatsApp',
            cr_badge1: 'High Income Potential', cr_badge2: 'Full Training',
            // Contact
            contact_tag: 'Get Started', contact_title: 'Get Free Insurance & <span class="gradient-text">Investment Consultation</span>',
            contact_desc: 'Fill in your details and our expert advisor will reach out within 24 hours to discuss your financial goals — completely free, no obligations.',
            contact_f1: '100% Free Consultation', contact_f2: 'No Obligations or Hidden Fees',
            contact_f3: 'Personalized Financial Plan', contact_f4: 'Expert Guidance from Day One',
            form_name: 'Full Name', form_name_ph: 'e.g. Rahul Sharma',
            form_phone: 'Phone Number', form_phone_ph: '+91 98280 51556',
            form_email: 'Email Address', form_email_ph: 'you@example.com',
            form_service: 'Interested In', form_select: 'Select a service',
            form_opt_mf: 'Mutual Funds', form_opt_ins: 'Life & Health Insurance', form_opt_sip: 'SIP Planning',
            form_opt_veh: 'Vehicle Insurance', form_opt_ret: 'Retirement Planning', form_opt_re: 'Real Estate Investment',
            form_opt_other: 'Other / General Inquiry',
            form_message: 'Message', form_message_ph: 'Tell us more about your requirements...',
            form_submit: '<i class="fas fa-paper-plane"></i> Request Consultation',
            form_note: 'We respect your privacy. Your information is 100% secure.',
            // Footer
            footer_brand_desc: 'Your trusted partner for financial advisory and insurance solutions. Building wealth, securing futures since 2000.',
            footer_quick: 'Quick Links', footer_services: 'Our Services', footer_whyus: 'Why Choose Us',
            footer_testimonials: 'Testimonials', footer_contact: 'Contact Us',
            footer_svc: 'Services', footer_mf: 'Mutual Funds', footer_ins: 'Insurance Plans',
            footer_sip: 'SIP Planning', footer_veh: 'Vehicle Insurance', footer_ret: 'Retirement Planning',
            footer_contact_h: 'Contact',
            footer_copy: '&copy; 2026 Dhariwal Investments. All rights reserved.',
            footer_disclaimer: 'Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Insurance is a subject matter of solicitation.',
        },
        hi: {
            // Navbar
            nav_services: 'सेवाएँ', nav_whyus: 'हम क्यों', nav_testimonials: 'ग्राहक अनुभव', nav_careers: 'अपना करियर शुरू करें',
            nav_contact: 'संपर्क', nav_cta: 'मुफ्त परामर्श बुक करें',
            // Hero
            hero_badge: '<i class="fas fa-shield-halved"></i> SEBI पंजीकृत &bull; IRDAI प्रमाणित',
            hero_title: 'अपने भविष्य को सुरक्षित करें<br><span class="gradient-text">विश्वसनीय</span> बीमा और <span class="gradient-text">निवेश</span> समाधान',
            hero_subtitle: '25+ वर्षों का अनुभव &nbsp;|&nbsp; 6000+ संतुष्ट ग्राहक',
            hero_trust1: '25+ वर्षों का अनुभव', hero_trust2: '6000+ ग्राहक सेवित', hero_trust3: 'विश्वसनीय वित्तीय सलाहकार',
            hero_cta1: '<i class="fas fa-calendar-check"></i> मुफ्त परामर्श प्राप्त करें',
            hero_cta3: '<i class="fas fa-arrow-right"></i> सेवाएँ देखें',
            hero_cta2: '<i class="fab fa-whatsapp"></i> WhatsApp पर चैट करें',
            hero_insured: 'बीमित', hero_scroll: 'स्क्रॉल',
            // Achievements
            ach_badge: 'पुरस्कार विजेता', ach_tag: 'हमारा ट्रैक रिकॉर्ड',
            ach_title: 'सिद्ध <span class="gradient-text">उपलब्धियाँ</span>',
            ach_desc: 'दशकों का विश्वास, हज़ारों संतुष्ट ग्राहक, और वित्तीय उत्कृष्टता की विरासत।',
            ach_years: 'वर्षों का अनुभव', ach_clients: 'खुश ग्राहक', ach_policies: 'बीमा पॉलिसियाँ', ach_agents: 'एजेंट',
            ach_trust_banner: 'विश्वसनीय वित्तीय सलाहकार — SEBI पंजीकृत और IRDAI प्रमाणित',
            // Services
            svc_tag: 'हम क्या प्रदान करते हैं', svc_title: 'व्यापक वित्तीय <span class="gradient-text">समाधान</span>',
            svc_desc: 'धन निर्माण से सुरक्षा तक — हम आपकी वित्तीय यात्रा के हर पहलू को कवर करते हैं।',
            svc_mf_title: 'म्यूचुअल फंड', svc_mf_desc: 'विशेषज्ञों द्वारा तैयार किए गए विविध म्यूचुअल फंड पोर्टफोलियो जो जोखिम प्रबंधन के साथ आपके रिटर्न को अधिकतम करते हैं।',
            svc_ins_title: 'जीवन और स्वास्थ्य बीमा', svc_ins_desc: 'आपके और आपके प्रियजनों की सुरक्षा के लिए व्यापक जीवन, स्वास्थ्य और टर्म बीमा योजनाएँ।',
            svc_sip_title: 'SIP योजना', svc_sip_desc: 'अनुशासित, नियमित निवेश के माध्यम से दीर्घकालिक संपत्ति बनाने के लिए डिज़ाइन की गई व्यवस्थित निवेश योजनाएँ।',
            svc_veh_title: 'वाहन बीमा', svc_veh_desc: 'आपकी कार और दोपहिया वाहनों के लिए व्यापक मोटर बीमा, दुर्घटना, चोरी और तृतीय-पक्ष देनदारियों को कवर करता है।',
            svc_ret_title: 'सेवानिवृत्ति योजना', svc_ret_desc: 'सेवानिवृत्ति के बाद वित्तीय स्वतंत्रता और आरामदायक जीवन सुनिश्चित करने के लिए अनुकूलित सेवानिवृत्ति रणनीतियाँ।',
            svc_re_title: 'रियल एस्टेट निवेश', svc_re_desc: 'उच्च-विकास आवासीय और वाणिज्यिक रियल एस्टेट परियोजनाओं में विशेषज्ञ मार्गदर्शन और चुनिंदा अवसर।',
            svc_learn: 'और जानें <i class="fas fa-arrow-right"></i>',
            // Why Us
            why_tag: 'धारीवाल इन्वेस्टमेंट्स क्यों', why_title: '<span class="gradient-text">विश्वास और विशेषज्ञता</span> पर आधारित',
            why_desc: 'हम दशकों का अनुभव, प्रमाणित विशेषज्ञता और ग्राहक-प्रथम दृष्टिकोण हर रिश्ते में लाते हैं।',
            why1_title: 'अनुभवी वित्तीय सलाहकार', why1_desc: 'जटिल वित्तीय बाज़ारों में सफलता के सिद्ध ट्रैक रिकॉर्ड के साथ दशकों की विशेषज्ञता।',
            why2_title: 'व्यक्तिगत वित्तीय योजना', why2_desc: 'आपके अनूठे जीवन लक्ष्यों, जोखिम क्षमता और भविष्य की आकांक्षाओं के अनुसार तैयार की गई रणनीतियाँ।',
            why3_title: 'पारदर्शी मार्गदर्शन', why3_desc: 'बिना किसी छिपे एजेंडे के स्पष्ट, ईमानदार सलाह, जिससे आप पूर्ण विश्वास के साथ सूचित निर्णय ले सकें।',
            why4_title: 'दीर्घकालिक ग्राहक संबंध', why4_desc: 'हम आपके साथ बढ़ते हैं, आपकी वित्तीय यात्रा के हर चरण के लिए निरंतर सहायता और विकसित योजनाएँ प्रदान करते हैं।',
            // Testimonials
            test_tag: 'ग्राहक कहानियाँ', test_title: '<span class="gradient-text">हज़ारों</span> का विश्वास',
            test_desc: 'उन ग्राहकों से सुनें जिन्होंने धारीवाल निवेश के साथ अपना वित्तीय भविष्य बदला।',
            review_title: 'अपना अनुभव साझा करें', review_submit: 'समीक्षा सबमिट करें',
            // Career
            cr_tag: 'अपना करियर शुरू करें', cr_title: '<span class="gradient-text">बिना अनुभव</span> के फाइनेंस में करियर बनाएं',
            cr_desc: 'धारीवाल इन्वेस्टमेंट्स से एक LIC बीमा सलाहकार के रूप में जुड़ें। हम आपको पूर्ण प्रशिक्षण, सहायता और वह मंच प्रदान करते हैं जिसकी आपको वित्तीय क्षेत्र में एक लचीला और उच्च आय वाला करियर बनाने के लिए आवश्यकता है।',
            cr_b1: 'पूर्व अनुभव की आवश्यकता नहीं', cr_b2: 'शुरुआत से पूर्ण प्रशिक्षण दिया जाएगा',
            cr_b3: 'लचीले काम के घंटे (पार्ट-टाइम / फुल-टाइम)', cr_b4: 'अच्छी आय अर्जित करने का अवसर',
            cr_b5: 'एक विश्वसनीय वित्तीय सलाहकार फर्म के साथ काम करें', cr_b6: 'फाइनेंस में दीर्घकालिक करियर विकास',
            cr_btn1: 'अभी आवेदन करें', cr_btn2: '<i class="fab fa-whatsapp"></i> व्हाट्सएप पर बात करें',
            cr_badge1: 'उच्च आय क्षमता', cr_badge2: 'पूरा प्रशिक्षण',
            // Contact
            contact_tag: 'शुरू करें', contact_title: 'मुफ्त बीमा और <span class="gradient-text">निवेश परामर्श</span> प्राप्त करें',
            contact_desc: 'अपनी जानकारी भरें और हमारे विशेषज्ञ सलाहकार 24 घंटों के भीतर आपके वित्तीय लक्ष्यों पर चर्चा करने के लिए संपर्क करेंगे — पूरी तरह मुफ्त, बिना किसी बाध्यता।',
            contact_f1: '100% मुफ्त परामर्श', contact_f2: 'कोई बाध्यता या छिपी फीस नहीं',
            contact_f3: 'व्यक्तिगत वित्तीय योजना', contact_f4: 'पहले दिन से विशेषज्ञ मार्गदर्शन',
            form_name: 'पूरा नाम', form_name_ph: 'जैसे राहुल शर्मा',
            form_phone: 'फ़ोन नंबर', form_phone_ph: '+91 98280 51556',
            form_email: 'ईमेल पता', form_email_ph: 'you@example.com',
            form_service: 'रुचि है', form_select: 'एक सेवा चुनें',
            form_opt_mf: 'म्यूचुअल फंड', form_opt_ins: 'जीवन और स्वास्थ्य बीमा', form_opt_sip: 'SIP योजना',
            form_opt_veh: 'वाहन बीमा', form_opt_ret: 'सेवानिवृत्ति योजना', form_opt_re: 'रियल एस्टेट निवेश',
            form_opt_other: 'अन्य / सामान्य पूछताछ',
            form_message: 'संदेश', form_message_ph: 'अपनी आवश्यकताओं के बारे में और बताएं...',
            form_submit: '<i class="fas fa-paper-plane"></i> परामर्श का अनुरोध करें',
            form_note: 'हम आपकी गोपनीयता का सम्मान करते हैं। आपकी जानकारी 100% सुरक्षित है।',
            // Footer
            footer_brand_desc: 'वित्तीय सलाहकार और बीमा समाधान के लिए आपका विश्वसनीय साथी। 2000 से संपत्ति बनाना, भविष्य सुरक्षित करना।',
            footer_quick: 'त्वरित लिंक', footer_services: 'हमारी सेवाएँ', footer_whyus: 'हमें क्यों चुनें',
            footer_testimonials: 'ग्राहक अनुभव', footer_contact: 'संपर्क करें',
            footer_svc: 'सेवाएँ', footer_mf: 'म्यूचुअल फंड', footer_ins: 'बीमा योजनाएँ',
            footer_sip: 'SIP योजना', footer_veh: 'वाहन बीमा', footer_ret: 'सेवानिवृत्ति योजना',
            footer_contact_h: 'संपर्क',
            footer_copy: '&copy; 2026 धारीवाल इन्वेस्टमेंट्स। सर्वाधिकार सुरक्षित।',
            footer_disclaimer: 'अस्वीकरण: म्यूचुअल फंड निवेश बाजार जोखिमों के अधीन हैं। कृपया निवेश करने से पहले सभी योजना-संबंधी दस्तावेज़ों को ध्यान से पढ़ें। बीमा आग्रह का विषय है।',
        }
    };

    // Elements with innerHTML (contain icons/html)
    const htmlKeys = new Set([
        'hero_badge', 'hero_title', 'hero_subtitle', 'hero_cta1', 'hero_cta2', 'hero_cta3',
        'ach_title', 'svc_title', 'svc_learn', 'why_title', 'test_title',
        'contact_title', 'form_submit', 'footer_copy', 'ach_trust_banner',
        'cr_title', 'cr_btn2'
    ]);

    function setLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Apply global language class for CSS overrides (like line-heights for Hindi)
        document.body.classList.toggle('lang-hi', lang === 'hi');

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                if (htmlKeys.has(key)) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Update toggle button label
        const toggleLabel = document.getElementById('lang-toggle-label');
        if (toggleLabel) {
            toggleLabel.textContent = lang === 'en' ? 'हिंदी' : 'English';
        }

        // Update html lang attribute
        document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

        // Save preference
        localStorage.setItem('dh-lang', lang);
        window.__currentLang = lang;
    }

    // Language popup logic
    const langPopup = document.getElementById('lang-popup');
    const langToggle = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('dh-lang');

    if (savedLang) {
        // Pre-apply saved language but still show popup
        setLanguage(savedLang);
    }
    // Always show the popup on load
    langPopup.classList.remove('hidden');
    langPopup.style.display = '';

    // Popup button clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            langPopup.classList.add('hidden');
            setTimeout(() => { langPopup.style.display = 'none'; }, 400);
        });
    });

    // Floating toggle click
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = window.__currentLang || 'en';
            setLanguage(current === 'en' ? 'hi' : 'en');
        });
    }

    // ===== FINTECH HERO ANIMATION (GSAP) =====
    function initFintechAnimation() {
        if (typeof gsap === 'undefined') { console.warn('GSAP not loaded'); return; }

        const svgNS = "http://www.w3.org/2000/svg";
        const visual = document.getElementById('fintech-visual');
        if (!visual) { console.warn('fintech-visual not found'); return; }

        const networkGroup = document.getElementById('network-group');
        const barsGroup = document.getElementById('growth-bars');
        const nodesGroup = document.getElementById('curve-nodes');
        const curvePath = document.getElementById('compound-curve');
        const layer = document.getElementById('floating-elements-layer');

        if (!networkGroup || !barsGroup || !nodesGroup || !curvePath || !layer) {
            console.warn('Missing SVG groups'); return;
        }

        // ── 1. Network Grid (dots + connecting lines) ──
        const netNodes = [];
        for (let i = 0; i < 50; i++) {
            const cx = Math.random() * 800;
            const cy = Math.random() * 600;
            netNodes.push({ cx, cy });
            const circle = document.createElementNS(svgNS, 'circle');
            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
            circle.setAttribute('r', Math.random() > 0.7 ? 3 : 1.5);
            circle.setAttribute('fill', 'rgba(100, 180, 255, 0.35)');
            circle.setAttribute('opacity', '0');
            networkGroup.appendChild(circle);
        }
        // Connect nearby dots with thin lines
        for (let i = 0; i < netNodes.length; i++) {
            for (let j = i + 1; j < netNodes.length; j++) {
                const dist = Math.hypot(netNodes[i].cx - netNodes[j].cx, netNodes[i].cy - netNodes[j].cy);
                if (dist < 120) {
                    const line = document.createElementNS(svgNS, 'line');
                    line.setAttribute('x1', netNodes[i].cx);
                    line.setAttribute('y1', netNodes[i].cy);
                    line.setAttribute('x2', netNodes[j].cx);
                    line.setAttribute('y2', netNodes[j].cy);
                    line.setAttribute('stroke', 'rgba(100, 180, 255, 0.08)');
                    line.setAttribute('stroke-width', '1');
                    line.setAttribute('opacity', '0');
                    networkGroup.appendChild(line);
                }
            }
        }

        // ── 2. Growth Bars ──
        const numBars = 12;
        const barWidth = 28;
        const spacing = 48;
        const startX = 80;
        for (let i = 0; i < numBars; i++) {
            const barHeight = 30 + Math.pow(i, 2) * 2.8;
            const rect = document.createElementNS(svgNS, 'rect');
            rect.setAttribute('x', startX + i * spacing);
            rect.setAttribute('y', 550 - barHeight);
            rect.setAttribute('width', barWidth);
            rect.setAttribute('height', barHeight);
            rect.setAttribute('rx', 4);
            rect.setAttribute('fill', `rgba(212, 175, 55, ${0.08 + i * 0.02})`);
            rect.setAttribute('class', 'growth-bar');
            barsGroup.appendChild(rect);
        }

        // ── 3. Curve Nodes ──
        const pathLength = curvePath.getTotalLength();
        const nodePercents = [0.15, 0.35, 0.55, 0.75, 0.95];
        nodePercents.forEach((pct, i) => {
            const pt = curvePath.getPointAtLength(pathLength * pct);
            const circle = document.createElementNS(svgNS, 'circle');
            circle.setAttribute('cx', pt.x);
            circle.setAttribute('cy', pt.y);
            circle.setAttribute('r', i === nodePercents.length - 1 ? 10 : 5);
            circle.setAttribute('class', 'curve-node');
            nodesGroup.appendChild(circle);
        });

        // ── 4. Master Timeline ──
        gsap.set('.growth-bar', { transformOrigin: 'bottom center', scaleY: 0 });
        gsap.set(curvePath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        gsap.set('.curve-node', { scale: 0, transformOrigin: 'center center' });
        gsap.set('.fintech-badge', { opacity: 0, scale: 0.7, y: 20 });
        gsap.set('.fintech-visual', { opacity: 1 });

        const tl = gsap.timeline({ delay: 0.3 });

        // Phase 1: Network fades in
        tl.to(networkGroup.children, {
            opacity: 1, duration: 1.5,
            stagger: { amount: 1.2, from: 'random' },
            ease: 'power2.inOut'
        })
        // Phase 2: Bars rise
        .to('.growth-bar', {
            scaleY: 1, duration: 1.0,
            stagger: 0.08, ease: 'back.out(1.4)'
        }, '-=0.8')
        // Phase 3: Curve draws
        .to(curvePath, {
            strokeDashoffset: 0, duration: 2.0,
            ease: 'power3.inOut'
        }, '-=1.2')
        // Phase 4: Data nodes pop in
        .to('.curve-node', {
            scale: 1, duration: 0.5,
            stagger: 0.15, ease: 'elastic.out(1.2, 0.4)'
        }, '-=1.0')
        // Phase 5: Badges slide in
        .to('#badge-insight', {
            opacity: 1, scale: 1, y: 0,
            duration: 0.7, ease: 'back.out(1.8)'
        }, '-=0.6')
        .to('#badge-secure', {
            opacity: 1, scale: 1, y: 0,
            duration: 0.7, ease: 'back.out(1.8)'
        }, '-=0.4');

        // ── 5. Continuous floating particles ──
        const icons = [
            '<i class="fas fa-coins"></i>',
            '<i class="fas fa-indian-rupee-sign"></i>',
            '<i class="fas fa-arrow-trend-up"></i>',
            '<i class="fas fa-chart-pie"></i>',
            '<i class="fas fa-piggy-bank"></i>'
        ];
        for (let i = 0; i < 8; i++) {
            const el = document.createElement('div');
            el.className = 'fintech-coin';
            el.innerHTML = icons[i % icons.length];
            layer.appendChild(el);

            const startX = 50 + Math.random() * 520;
            const startY = 420 + Math.random() * 120;
            const sc = 0.5 + Math.random() * 0.6;

            gsap.set(el, { x: startX, y: startY, scale: sc, opacity: 0.7 });

            gsap.to(el, {
                y: startY - 200 - Math.random() * 150,
                opacity: 0.3, duration: 5 + Math.random() * 4,
                repeat: -1, yoyo: true, ease: 'sine.inOut',
                delay: Math.random() * 3
            });
            gsap.to(el, {
                x: startX + (Math.random() - 0.5) * 80,
                duration: 3 + Math.random() * 3,
                repeat: -1, yoyo: true, ease: 'sine.inOut',
                delay: Math.random() * 3
            });
        }

        // ── 6. 3-Layer Mouse Parallax ──
        // Store base positions for badges so parallax doesn't drift
        const badgeInsight = document.getElementById('badge-insight');
        const badgeSecure = document.getElementById('badge-secure');

        const heroSection = document.getElementById('hero');
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
            const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

            // Layer 1 — background network (slow)
            gsap.to(networkGroup, {
                x: xNorm * -8, y: yNorm * -8,
                duration: 1.2, ease: 'power2.out', overwrite: 'auto'
            });
            // Layer 2 — particles (medium)
            gsap.to(layer, {
                x: xNorm * -18, y: yNorm * -18,
                duration: 1.0, ease: 'power2.out', overwrite: 'auto'
            });
            // Layer 3 — bars + curve (prominent)
            gsap.to('.fintech-bg-svg', {
                x: xNorm * -25, y: yNorm * -25,
                duration: 0.9, ease: 'power2.out', overwrite: 'auto'
            });
        });

        heroSection.addEventListener('mouseleave', () => {
            gsap.to([networkGroup, layer, '.fintech-bg-svg'], {
                x: 0, y: 0, duration: 1.2, ease: 'power2.out', overwrite: 'auto'
            });
        });

        console.log('✅ Fintech animation initialized');
    }

    // Initialize animation
    initFintechAnimation();

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const handleNavScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    // ===== MOBILE HAMBURGER MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // ===== SCROLL REVEAL (Intersection Observer) =====
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered reveal
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));

    // ===== ANIMATED NUMBER COUNTERS =====
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let countersStarted = false;

    const animateCounters = () => {
        statNumbers.forEach(el => {
            const target = +el.dataset.target;
            const duration = 2000;
            const startTime = performance.now();

            const update = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(target * eased).toLocaleString('en-IN');

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = target.toLocaleString('en-IN');
                }
            };
            requestAnimationFrame(update);
        });
    };

    const statsSection = document.getElementById('stats-bar');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    if (statsSection) counterObserver.observe(statsSection);

    // ===== ACHIEVEMENT PHOTO CAROUSEL =====
    const achCarousel = document.getElementById('achievement-carousel');
    const achDotsWrap = document.getElementById('achievement-dots');
    if (achCarousel && achDotsWrap) {
        console.log('Achievement carousel localized. Initializing...');
        const achImages = achCarousel.querySelectorAll('.achievement-img');
        const achDots = achDotsWrap.querySelectorAll('.ach-dot');
        let achCurrent = 0;
        const achTotal = achImages.length;

        const achGoTo = (index) => {
            achCurrent = ((index % achTotal) + achTotal) % achTotal;
            achImages.forEach((img, i) => img.classList.toggle('active', i === achCurrent));
            achDots.forEach((d, i) => d.classList.toggle('active', i === achCurrent));
        };

        achDots.forEach((dot, i) => dot.addEventListener('click', () => achGoTo(i)));

        // Auto-rotate every 3.5 seconds
        let achAutoPlay = setInterval(() => achGoTo(achCurrent + 1), 3500);
        achCarousel.addEventListener('mouseenter', () => clearInterval(achAutoPlay));
        achCarousel.addEventListener('mouseleave', () => {
            achAutoPlay = setInterval(() => achGoTo(achCurrent + 1), 3500);
        });
    }

    // ===== TESTIMONIAL CAROUSEL (Dynamic) =====
    class TestimonialCarousel {
        constructor() {
            this.track = document.getElementById('testimonial-track');
            this.prevBtn = document.getElementById('carousel-prev');
            this.nextBtn = document.getElementById('carousel-next');
            this.dotsWrap = document.getElementById('carousel-dots');
            this.current = 0;
            this.autoPlay = null;

            if (this.track && this.prevBtn && this.nextBtn && this.dotsWrap) {
                this.init();
            }
        }

        init() {
            this.updateState();
            this.createDots();
            this.setupEventListeners();
            this.startAutoPlay();
        }

        updateState() {
            this.cards = this.track.querySelectorAll('.testimonial-card');
            this.total = this.cards.length;
        }

        createDots() {
            this.dotsWrap.innerHTML = '';
            for (let i = 0; i < this.total; i++) {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot' + (i === this.current ? ' active' : '');
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.addEventListener('click', () => this.goTo(i));
                this.dotsWrap.appendChild(dot);
            }
            this.dots = this.dotsWrap.querySelectorAll('.carousel-dot');
        }

        goTo(index) {
            this.current = ((index % this.total) + this.total) % this.total;
            this.track.style.transform = `translateX(-${this.current * 100}%)`;
            if (this.dots) {
                this.dots.forEach((d, i) => d.classList.toggle('active', i === this.current));
            }
        }

        setupEventListeners() {
            this.prevBtn.addEventListener('click', () => this.goTo(this.current - 1));
            this.nextBtn.addEventListener('click', () => this.goTo(this.current + 1));

            const carousel = document.getElementById('testimonial-carousel');
            carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());

            // Swipe support
            let touchStartX = 0;
            carousel.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].clientX;
            }, { passive: true });
            carousel.addEventListener('touchend', e => {
                const diff = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? this.goTo(this.current - 1) : this.goTo(this.current + 1);
                }
            }, { passive: true });
        }

        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlay = setInterval(() => this.goTo(this.current + 1), 5000);
        }

        stopAutoPlay() {
            if (this.autoPlay) clearInterval(this.autoPlay);
        }

        addReview(reviewData) {
            // Create New Card
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            
            let starsHtml = '';
            for(let i=1; i<=5; i++) {
                starsHtml += `<i class="${i <= reviewData.rating ? 'fas' : 'far'} fa-star"></i>`;
            }

            card.innerHTML = `
                <div class="testimonial-stars">${starsHtml}</div>
                <p class="testimonial-text">"${reviewData.text}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar"><i class="fas fa-user"></i></div>
                    <div>
                        <div class="author-name">${reviewData.name}</div>
                        <div class="author-role">Client, ${reviewData.city}</div>
                    </div>
                </div>
            `;

            this.track.appendChild(card);
            this.updateState();
            this.createDots();
            this.goTo(this.total - 1); // Go to the new review
        }
    }

    const testimonialCarousel = new TestimonialCarousel();

    // ===== REVIEW FORM LOGIC =====
    const starRating = document.getElementById('star-rating');
    const ratingInput = document.getElementById('review-rating');
    const reviewForm = document.getElementById('review-form');

    if (starRating && ratingInput) {
        const stars = starRating.querySelectorAll('i');
        
        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const val = this.dataset.value;
                stars.forEach(s => s.classList.toggle('hover', s.dataset.value <= val));
            });

            star.addEventListener('mouseout', () => {
                stars.forEach(s => s.classList.remove('hover'));
            });

            star.addEventListener('click', function() {
                const val = this.dataset.value;
                ratingInput.value = val;
                stars.forEach(s => {
                    s.classList.toggle('fas', s.dataset.value <= val);
                    s.classList.toggle('far', s.dataset.value > val);
                    s.classList.toggle('active', s.dataset.value <= val);
                });
            });
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('review-name').value;
            const city = document.getElementById('review-city').value;
            const text = document.getElementById('review-text').value;
            const rating = parseInt(ratingInput.value);

            if (rating === 0) {
                alert('Please select a star rating.');
                return;
            }

            const newReview = { name, city, text, rating };
            
            // Update Carousel
            if (testimonialCarousel) {
                testimonialCarousel.addReview(newReview);
            }

            // Success feedback
            const successMsg = document.getElementById('review-success');
            if (successMsg) {
                successMsg.style.display = 'block';
                reviewForm.reset();
                const stars = starRating.querySelectorAll('i');
                stars.forEach(s => {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                });
                ratingInput.value = "0";
                
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

    // ===== CONTACT FORM VALIDATION & SUBMISSION =====
    const form = document.getElementById('contact-form');

    if (form) {
        const fields = {
            name:    document.getElementById('form-name'),
            phone:   document.getElementById('form-phone'),
            email:   document.getElementById('form-email'),
            service: document.getElementById('form-service'),
            message: document.getElementById('form-message')
        };

        const validateField = (field, condition) => {
            if (!field) return false;
            field.classList.remove('error', 'success');
            if (condition) {
                field.classList.add('success');
                return true;
            } else {
                field.classList.add('error');
                return false;
            }
        };

        // Live validation
        fields.name.addEventListener('blur', () => {
            validateField(fields.name, fields.name.value.trim().length >= 2);
        });
        fields.phone.addEventListener('blur', () => {
            validateField(fields.phone, /^[+]?\d{10,13}$/.test(fields.phone.value.replace(/\s/g, '')));
        });
        fields.email.addEventListener('blur', () => {
            validateField(fields.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value));
        });
        fields.service.addEventListener('change', () => {
            validateField(fields.service, fields.service.value !== '');
        });
        fields.message.addEventListener('blur', () => {
            validateField(fields.message, fields.message.value.trim().length >= 10);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameOk    = validateField(fields.name, fields.name.value.trim().length >= 2);
            const phoneOk   = validateField(fields.phone, /^[+]?\d{10,13}$/.test(fields.phone.value.replace(/\s/g, '')));
            const emailOk   = validateField(fields.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value));
            const serviceOk = validateField(fields.service, fields.service.value !== '');
            const messageOk = validateField(fields.message, fields.message.value.trim().length >= 10);

            if (nameOk && phoneOk && emailOk && serviceOk && messageOk) {
                const rawMessage = `*New Consultation Request*\n\n*Name:* ${fields.name.value.trim()}\n*Phone:* ${fields.phone.value.trim()}\n*Email:* ${fields.email.value.trim()}\n*Interested In:* ${fields.service.options[fields.service.selectedIndex].text}\n\n*Message:*\n${fields.message.value.trim()}`;
                const waUrl = `https://api.whatsapp.com/send?phone=919828051556&text=${encodeURIComponent(rawMessage)}`;

                // Try window.open first (works in direct event handlers on both desktop & mobile)
                const newWin = window.open(waUrl, '_blank');
                // If popup was blocked, fall back to same-tab redirect
                if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
                    window.location.href = waUrl;
                }

                // Show success message after redirect
                setTimeout(() => {
                    form.innerHTML = `
                        <div class="form-success">
                            <div class="success-icon"><i class="fas fa-check"></i></div>
                            <h3>Redirecting to WhatsApp...</h3>
                            <p>We are opening WhatsApp to send your details securely.<br>If nothing happens, <a href="${waUrl}" target="_blank" style="color:#F4C542;text-decoration:underline;">click here</a>.</p>
                        </div>
                    `;
                }, 500);
            } else {
                // Form validation failed. Alert user so they don't think standard button is broken.
                alert("Please fill out all fields correctly. Note: Your phone number must be valid and the message must be at least 10 characters long!");
            }
        });
    }

    // ===== HERO PARTICLE EFFECT =====
    const particlesContainer = document.getElementById('hero-particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 1;
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(96, 165, 250, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }

        // Add keyframe for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
                25% { transform: translate(${Math.random() * 50 - 25}px, -${Math.random() * 40 + 20}px) scale(1.5); opacity: 0.7; }
                50% { transform: translate(${Math.random() * 60 - 30}px, -${Math.random() * 60 + 30}px) scale(1); opacity: 0.5; }
                75% { transform: translate(${Math.random() * 40 - 20}px, -${Math.random() * 30 + 15}px) scale(1.3); opacity: 0.6; }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

});
