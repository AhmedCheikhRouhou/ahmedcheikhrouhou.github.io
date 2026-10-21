/* ==========================================================================
   SITE CONTENT: edit this file to update the website.
   Everything on the page is rendered from here (layout lives in app.js / CSS).
   Strings may contain simple HTML (<strong>, <em>, <a>).
   ========================================================================== */
window.SITE = {

  profile: {
    name: "Ahmed Cheikh Rouhou",
    title: "Engineering Manager, AI",
    degree: "PhD in Computer Science",
    location: "Ariana, Tunisia",
    email: { user: "ahmed.ch.90", host: "gmail.com" },
    links: {
      linkedin: "https://www.linkedin.com/in/ahmed-cheikhrouhou/",
      github: "https://github.com/AhmedCheikhRouhou",
      scholar: "https://scholar.google.com/citations?user=S_HidTUAAAAJ&hl=en"
    },
    cv: {
      short: { href: "assets/cv/AhmedCheikhRouhou_CV_2page.pdf", label: "2-page CV", note: "Best for a quick read" },
      full:  { href: "assets/cv/AhmedCheikhRouhou_CV_full.pdf",   label: "Full CV",   note: "Every role, paper and certificate" }
    }
  },

  /* The two ways of reading the same career. */
  lenses: {
    research: {
      label: "Research",
      role: "Research Engineer turned Engineering Manager",
      statement: "I teach machines to read handwriting, and to understand what they have read.",
      about: [
        "My PhD was about finding words in printed and handwritten documents across scripts. Since then my work has moved from keyword spotting to Transformers and graph networks that transcribe a page and tag its people, dates and places in a single pass.",
        "I have also pre-trained language models for a low-resource dialect, studied how handwriting models can keep learning new scripts without forgetting old ones, and co-supervised a PhD thesis on exactly that."
      ],
      glance: [
        ["Publications", "12 peer-reviewed papers, 6 as first author"],
        ["Doctorate", "PhD in Computer Science, defended June 2021 with honors"],
        ["Best-known results", "State of the art on ICDAR 2017 Information Extraction (twice) and on IAM"],
        ["Supervision", "Co-supervised a PhD thesis on continual learning for handwritten-document foundation models"]
      ]
    },
    engineering: {
      label: "Engineering",
      role: "Engineering Manager, AI team of up to 20",
      statement: "I lead the team that takes AI from a promising paper to a model that runs in production.",
      about: [
        "I manage an AI team of up to 20 people, including interns, organised around senior technical leads. I co-create statements of work, plan hiring, and own quality assurance and validation of AI projects for GxP-regulated environments.",
        "Before managing, I was the project lead and a hands-on engineer on a histology segmentation system built on LongViT and released as ONNX models. I still make the technical calls: architecture, sprint planning and what ships."
      ],
      glance: [
        ["Team today", "Up to 20 people, including interns, through senior technical leads"],
        ["Scaling up", "Managed 3 team leads and a team of 11 as Senior Research Engineer"],
        ["Hiring", "Ran the internship program end to end and recruited 12+ interns"],
        ["Ecosystem", "Collaborations with 5+ Tunisian universities, plus hackathons I created and judged"]
      ]
    }
  },

  /* ---------------------------------------------------------------------
     EXPERIENCE. Each bullet carries the lens(es) it speaks to.
     --------------------------------------------------------------------- */
  experience: {
    instadeep: {
      org: "InstaDeep Ltd",
      location: "Tunis, Tunisia",
      span: "January 2020 to present",
      roles: [
        {
          title: "Engineering Manager",
          dates: "Jan 2026 to present",
          scope: "Team of up to 20, through senior technical leads",
          bullets: [
            { lens: ["engineering"], t: "Lead a team of up to 20 people, including interns, organised around senior technical leads." },
            { lens: ["engineering"], t: "Own quality assurance and validation of AI projects for GxP-regulated environments." },
            { lens: ["engineering"], t: "Define hiring plans and co-create statements of work (SOWs) for projects." }
          ]
        },
        {
          title: "Senior Research Engineer",
          dates: "Sep 2023 to Dec 2025",
          scope: "Project lead, and manager of 3 team leads (team of 11)",
          bullets: [
            { lens: ["engineering"], t: "Project lead for a histology (H&amp;E) whole-slide image segmentation system that detects tissue regions. Owned the software architecture and sprint planning while staying hands-on, taking and implementing tasks." },
            { lens: ["engineering", "research"], t: "Integrated <strong>LongViT</strong> as the backbone for very high-resolution slides (up to 32,768 × 32,768 pixels, about one million patches). It beat our baseline, and we kept developing and releasing models for production, integrated in another environment as ONNX. The project is ongoing." },
            { lens: ["engineering"], t: "Managed three team leads, who in turn managed the rest of an 11-person team." },
            { lens: ["engineering"], t: "Owned the internship program end to end: from creating the subjects to interviews, hiring, follow-up and validation. Recruited 12+ interns." },
            { lens: ["engineering"], t: "Took a larger part in hiring and in technical decisions on other projects." },
            { lens: ["engineering", "research"], t: "Led university collaborations and hackathons: taught courses on Transformers, LLMs and computer vision, led participant teams in workshops, created most of the hackathons, and judged at events including Deep Learning Indaba and IndabaX." }
          ]
        },
        {
          title: "Research Engineer and Team Lead",
          dates: "Sep 2021 to Sep 2023",
          scope: "Team of 4, engineers and interns",
          bullets: [
            { lens: ["engineering"], t: "Led and managed a team of 4 (a mix of interns and full-time engineers), managing them and guiding them technically." },
            { lens: ["research", "engineering"], t: "Worked on an R&amp;D project with a biotech partner on AI-enabled peptide design and modification, combining Transformers, graph neural networks and AlphaFold. My focus was studying and predicting peptide binding." },
            { lens: ["research"], t: "Co-supervised a PhD thesis with CRNS on continual learning for handwritten-document foundation models. It produced <a href=\"https://doi.org/10.1016/j.patrec.2023.03.020\">MSdocTr-Lite</a> (Pattern Recognition Letters, 2023) and <a href=\"https://doi.org/10.1016/j.eswa.2025.128741\">UCL-MHTR</a> (Expert Systems with Applications, 2025)." },
            { lens: ["research"], t: "Led an internship research project on information extraction from handwritten documents: a Transformer and Graph Convolutional Network model (Sparse Graph Transformer Encoder with a Cross-GCN decoder) that reached state of the art on IAM and ICDAR 2017 IE. Published at <a href=\"https://openaccess.thecvf.com/content/WACV2024/papers/Khanfir_Graph_Neural_Networks_for_End-to-End_Information_Extraction_From_Handwritten_Documents_WACV_2024_paper.pdf\">WACV 2024</a>." },
            { lens: ["engineering"], t: "Highly involved in hiring as a technical AI leader." }
          ]
        },
        {
          title: "Research Engineer",
          dates: "Jan 2020 to Sep 2021",
          scope: "Researcher and engineer",
          bullets: [
            { lens: ["research"], t: "Designed and implemented, in PyTorch, an end-to-end Transformer that jointly performs paragraph-level handwriting recognition and named entity recognition on historical documents. It was the first Transformer approach to named entity recognition in handwritten documents and reached state of the art on the ICDAR 2017 Information Extraction competition. Published in Pattern Recognition Letters, with CRNS." },
            { lens: ["research", "engineering"], t: "Contributed to the pre-training and data preparation of <strong>TunBERT</strong>, the first open-source BERT model for the Tunisian dialect, built on NVIDIA NeMo and PyTorch with multi-GPU training, in a joint project with NVIDIA and iCompass." },
            { lens: ["engineering", "research"], t: "Released the code and fine-tuning datasets on <a href=\"https://github.com/instadeepai/tunbert\">GitHub</a>, co-authored two publications on the work, and helped prepare InstaDeep's NVIDIA GTC talk on TunBERT." }
          ]
        }
      ]
    },

    earlier: [
      {
        title: "Researcher and PhD Student",
        org: "Digital Research Centre of Sfax (CRNS)",
        location: "Sfax, Tunisia",
        dates: "Mar 2015 to Dec 2019",
        lens: ["research"],
        bullets: [
          { t: "Arabic text recognition: word spotting and indexing of printed and handwritten, multi-script documents. This was the subject of my PhD thesis." },
          { t: "Five publications came out of this period, from the ALTID database at ICDAR 2015 to keyword spotting in Neural Computing and Applications." }
        ]
      },
      {
        title: "Lecturer and Instructor",
        org: "Esprit School of Business, University of Sfax, Training Pro Group",
        location: "Tunisia",
        dates: "2017 to 2023",
        lens: ["research", "engineering"],
        bullets: [
          { t: "Esprit School of Business (Sep 2021 to 2023): machine learning and deep learning fundamentals." },
          { t: "University of Sfax (Sep 2017 to Jan 2018): Computer Sciences and Internet Certificate at the Faculty of Economics and Management, and, at the National School of Engineers of Sfax, a JEE application tutorial and an introduction to neural networks for image classification." },
          { t: "Training Pro Group (Jan 2017 to Sep 2019): instructor for Spring Framework, Hibernate ORM, Perl and Python." }
        ]
      },
      {
        title: "Full Stack Developer",
        org: "Logicom Company",
        location: "Sfax, Tunisia",
        dates: "Sep 2013 to Jan 2016",
        lens: ["engineering"],
        bullets: [
          { t: "Built a real-time synchronization system (RMI, FTP, SQL) and a dedicated backup module (services, compression, logging)." },
          { t: "Upgraded the product to .NET (C#, WPF, NHibernate), optimized existing code (PL/SQL integration, design patterns, threads) and added device communication: time-attendance controller, cash drawer, RFID and SMS." }
        ]
      },
      {
        title: "Full Stack Engineer",
        org: "Talan Tunisie Internationale",
        location: "Tunis, Tunisia",
        dates: "Feb 2013 to Jul 2013",
        lens: ["engineering"],
        bullets: [
          { t: "Created an API for a geographic information system and a web application for marking construction sites in Tunisia." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------------
     PROJECTS: expandable case studies. `order` is the lens-specific rank.
     --------------------------------------------------------------------- */
  projects: [
    {
      id: "wsi",
      title: "Histology whole-slide segmentation",
      line: "Detecting tissue regions in H&E whole-slide images, from LongViT backbone to ONNX release.",
      tags: ["Computer vision", "Computational pathology", "Production"],
      order: { engineering: 1, research: 5 },
      problem: "Whole-slide images are gigapixel-scale, so a model has to see a very large area at full resolution to tell different tissue regions apart.",
      did: "As project lead I owned the software architecture and sprint planning, and I contributed code as a full-time engineer. My first contribution was integrating LongViT to handle the resolution. It was a strong backbone that improved on our baseline. We then kept developing and releasing models for production.",
      tech: ["LongViT", "Vision Transformers", "ONNX", "PyTorch"],
      outcome: "Models are integrated in another environment as ONNX files. The project is ongoing."
    },
    {
      id: "htr-ner",
      title: "Reading and understanding handwritten pages",
      line: "One Transformer that transcribes a paragraph and tags the entities in it.",
      tags: ["Document AI", "Transformers", "Research"],
      order: { research: 1, engineering: 4 },
      problem: "Information extraction from handwritten records usually transcribes first and recognises named entities second, so early errors, such as bad line segmentation, can never be recovered.",
      did: "I designed and implemented an end-to-end Transformer that works at paragraph level and does both tasks jointly. It avoids line segmentation and uses two-dimensional context to choose the semantic category. A follow-up with an internship team replaced the encoder with a Sparse Graph Transformer Encoder and a Cross-GCN decoder.",
      tech: ["PyTorch", "Transformers", "Graph Convolutional Networks"],
      outcome: "First Transformer approach to named entity recognition in handwritten documents, and state of the art on ICDAR 2017 Information Extraction using the Esposalles database, without dictionaries, language models or post-processing. The graph version also set state of the art on IAM.",
      links: [
        { label: "Pattern Recognition Letters 2022", href: "https://doi.org/10.1016/j.patrec.2021.11.010" },
        { label: "WACV 2024", href: "https://openaccess.thecvf.com/content/WACV2024/papers/Khanfir_Graph_Neural_Networks_for_End-to-End_Information_Extraction_From_Handwritten_Documents_WACV_2024_paper.pdf" }
      ]
    },
    {
      id: "tunbert",
      title: "TunBERT",
      line: "The first open-source BERT model for the Tunisian dialect.",
      tags: ["NLP", "Open source", "Low-resource languages"],
      order: { engineering: 2, research: 3 },
      problem: "Most language models are trained on Indo-European languages and need huge corpora. The Tunisian dialect is under-represented and has few public datasets.",
      did: "A joint project between InstaDeep, NVIDIA and iCompass. I was part of the team that pre-trained the model and prepared the data. We built on NVIDIA NeMo's PyTorch BERT and trained on multiple GPUs, then fine-tuned for sentiment analysis, dialect identification and reading comprehension. I also helped prepare the NVIDIA GTC talk.",
      tech: ["PyTorch", "NVIDIA NeMo", "BERT", "Multi-GPU training"],
      outcome: "Code and fine-tuning datasets released on GitHub. Two papers, with comparable or higher performance than multilingual and Arabic BERT baselines on the three tasks.",
      links: [
        { label: "GitHub", href: "https://github.com/instadeepai/tunbert" },
        { label: "SN Computer Science 2023", href: "https://doi.org/10.1007/s42979-022-01541-y" },
        { label: "ISPR 2022", href: "https://doi.org/10.1007/978-3-031-08277-1_23" }
      ]
    },
    {
      id: "peptides",
      title: "AI-enabled peptide design",
      line: "Predicting how designed peptides bind, in an R&D collaboration with a biotech partner.",
      tags: ["Bio-AI", "Graph neural networks", "AlphaFold"],
      order: { research: 4, engineering: 3 },
      problem: "Creating and modifying peptides computationally depends on knowing how well a candidate will bind.",
      did: "We combined several neural networks, including Transformers, graph neural networks and AlphaFold. My main focus was studying peptide binding and predicting it.",
      tech: ["Transformers", "Graph neural networks", "AlphaFold"],
      outcome: "Delivered as an R&amp;D project with the partner. The project and partner are not named publicly."
    },
    {
      id: "continual",
      title: "Handwriting models that keep learning",
      line: "Continual learning across scripts and languages, from a co-supervised PhD.",
      tags: ["Continual learning", "Self-supervised learning", "Supervision"],
      order: { research: 2, engineering: 5 },
      problem: "A handwriting model trained on one script tends to forget it when it learns another, and labeled data is expensive to collect.",
      did: "I co-supervised a CRNS PhD thesis on continual learning for handwritten-document foundation models, continuing my own earlier handwriting research. The work covers a lite Transformer for full-page multi-script recognition and a unified continual-learning system that applies continual learning in both self-supervised pre-training and fine-tuning.",
      tech: ["Transformers", "Self-supervised learning", "Continual learning"],
      outcome: "MSdocTr-Lite (2023) and UCL-MHTR (2025). UCL-MHTR reports state-of-the-art results on English, Italian and Russian handwriting with a single unified model.",
      links: [
        { label: "MSdocTr-Lite", href: "https://doi.org/10.1016/j.patrec.2023.03.020" },
        { label: "UCL-MHTR", href: "https://doi.org/10.1016/j.eswa.2025.128741" }
      ]
    }
  ],

  /* ---------------------------------------------------------------------
     PUBLICATIONS (12)
     --------------------------------------------------------------------- */
  publications: [
    { year: 2025, title: "UCL-MHTR: A unified continual learning system for multilingual handwritten text recognition",
      authors: ["Marwa Dhiaf", "Mohamed Ali Souibgui", "Yousri Kessentini", "Alicia Fornés", "Ahmed Cheikh Rouhou"],
      venue: "Expert Systems with Applications, vol. 294", tags: ["Document AI", "Continual learning"],
      links: [{ label: "DOI", href: "https://doi.org/10.1016/j.eswa.2025.128741" }] },
    { year: 2024, title: "Graph Neural Networks for End-to-End Information Extraction From Handwritten Documents",
      authors: ["Yessine Khanfir", "Marwa Dhiaf", "Emna Ghodhbani", "Ahmed Cheikh Rouhou", "Yousri Kessentini"],
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)", tags: ["Document AI"],
      links: [{ label: "PDF", href: "https://openaccess.thecvf.com/content/WACV2024/papers/Khanfir_Graph_Neural_Networks_for_End-to-End_Information_Extraction_From_Handwritten_Documents_WACV_2024_paper.pdf" }] },
    { year: 2023, title: "MSdocTr-Lite: A lite transformer for full page multi-script handwriting recognition",
      authors: ["Marwa Dhiaf", "Ahmed Cheikh Rouhou", "Yousri Kessentini", "Sinda Ben Salem"],
      venue: "Pattern Recognition Letters", tags: ["Document AI"],
      links: [{ label: "DOI", href: "https://doi.org/10.1016/j.patrec.2023.03.020" }, { label: "arXiv", href: "https://arxiv.org/abs/2303.13931" }] },
    { year: 2023, title: "TunBERT: Pretraining BERT for Tunisian Dialect Understanding",
      authors: ["Hatem Haddad", "Ahmed Cheikh Rouhou", "Abir Messaoudi", "Abir Korched", "Chayma Fourati", "Amel Sellami", "Moez Ben HajHmida", "Faten Ghriss"],
      venue: "SN Computer Science", tags: ["NLP", "Code available"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/s42979-022-01541-y" }, { label: "Code", href: "https://github.com/instadeepai/tunbert" }] },
    { year: 2022, title: "TunBERT: Pretrained Contextualized Text Representation for Tunisian Dialect",
      authors: ["Abir Messaoudi", "Ahmed Cheikh Rouhou", "Hatem Haddad", "Nourchene Ferchichi", "Moez BenHajhmida", "Abir Korched", "Malek Naski", "Faten Ghriss", "Amine Kerkeni"],
      venue: "International Conference on Intelligent Systems and Pattern Recognition (ISPR)", tags: ["NLP", "Code available"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-031-08277-1_23" }, { label: "Code", href: "https://github.com/instadeepai/tunbert" }] },
    { year: 2022, title: "Transformer-Based Approach for Joint Handwriting and Named Entity Recognition in Historical documents",
      authors: ["Ahmed Cheikh Rouhou", "Marwa Dhiaf", "Yousri Kessentini", "Sinda Ben Salem"],
      venue: "Pattern Recognition Letters, vol. 155", tags: ["Document AI", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1016/j.patrec.2021.11.010" }, { label: "arXiv", href: "https://arxiv.org/abs/2112.04189" }] },
    { year: 2021, title: "Multi-task learning for simultaneous script identification and keyword spotting in document images",
      authors: ["Ahmed Cheikh Rouhou", "Yousri Kessentini", "Slim Kanoun"],
      venue: "Pattern Recognition, vol. 113", tags: ["Keyword spotting", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1016/j.patcog.2021.107832" }] },
    { year: 2020, title: "Hybrid HMM/BLSTM system for multi-script keyword spotting in printed and handwritten documents with identification stage",
      authors: ["Ahmed Cheikh Rouhou", "Yousri Kessentini", "Slim Kanoun"],
      venue: "Neural Computing and Applications, vol. 32", tags: ["Keyword spotting", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/s00521-019-04429-w" }] },
    { year: 2019, title: "Hybrid HMM/DNN System for Arabic Handwriting Keyword Spotting",
      authors: ["Ahmed Cheikh Rouhou", "Yousri Kessentini", "Slim Kanoun"],
      venue: "International Conference on Image Analysis and Recognition (ICIAR)", tags: ["Keyword spotting", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-030-27202-9_19" }] },
    { year: 2019, title: "HMM based keyword spotting system in printed/handwritten Arabic/Latin documents with identification stage",
      authors: ["Ahmed Cheikh Rouhou", "Yousri Kessentini", "Slim Kanoun"],
      venue: "International Conference on Image Analysis and Recognition (ICIAR)", tags: ["Keyword spotting", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-030-27202-9_28" }] },
    { year: 2016, title: "A HMM-Based Arabic/Latin Handwritten/Printed Identification System",
      authors: ["Ahmed Cheikh Rouhou", "Zeineb Abdelhedi", "Yousri Kessentini"],
      venue: "International Conference on Hybrid Intelligent Systems (HIS)", tags: ["Document AI", "First author"],
      links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-319-52941-7_30" }] },
    { year: 2015, title: "ALTID: Arabic/Latin Text Images Database for recognition research",
      authors: ["Imen Chtourou", "Ahmed Cheikh Rouhou", "Faten Kallel Jaiem", "Slim Kanoun"],
      venue: "International Conference on Document Analysis and Recognition (ICDAR)", tags: ["Document AI"],
      links: [{ label: "DOI", href: "https://doi.org/10.1109/ICDAR.2015.7333879" }] }
  ],

  /* ---------------------------------------------------------------------
     COMMUNITY, TEACHING AND TALKS
     --------------------------------------------------------------------- */
  community: [
    { group: "Judging and mentoring", when: "Ongoing, 3+ times a year",
      what: "Judge, mentor and technical advisor",
      where: "AI hackathons, workshops and community events across Tunisia, including Deep Learning Indaba and IndabaX." },
    { group: "Judging and mentoring", when: "Ongoing",
      what: "Hackathon creator and team lead",
      where: "Created most of the hackathons I took part in, and led participant teams in workshops and hackathons." },
    { group: "Teaching", when: "2023",
      what: "Guest lecturer",
      where: "Transformer-Based Natural Language Processing Applications, TICV Master's program, National Engineering School of Tunis (ENIT)." },
    { group: "Teaching", when: "2021 to 2023",
      what: "Contractual teacher",
      where: "Machine learning and deep learning fundamentals, Esprit School of Business." },
    { group: "Teaching", when: "2017 to 2019",
      what: "Lecturer and instructor",
      where: "University of Sfax, National School of Engineers of Sfax and Training Pro Group: JEE, Spring, Hibernate, Perl, Python and an introduction to neural networks." },
    { group: "Committees and talks", when: "2023",
      what: "Publicity Chair",
      where: "International Conference on Intelligent Systems and Pattern Recognition (ISPR)." },
    { group: "Committees and talks", when: "2020",
      what: "AI trainer and speaker",
      where: "DSC Academy, and DSC SupCom (Data Science), Tunis." },
    { group: "Committees and talks", when: "2019",
      what: "Organization committee and teaching assistant",
      where: "Deep Learning IndabaX Sfax, and the NVIDIA Deep Learning Spring School in Monastir." },
    { group: "Committees and talks", when: "2018",
      what: "Organization committee",
      where: "2nd BioDialog Summer School on Biodiversity Informatics, Hammamet." }
  ],

  /* ---------------------------------------------------------------------
     SKILLS (`rank` orders the groups per lens)
     --------------------------------------------------------------------- */
  skills: [
    { name: "AI and ML", rank: { research: 1, engineering: 3 },
      items: ["PyTorch", "TensorFlow", "Transformers", "Computer vision", "NLP", "Graph neural networks", "Foundation models", "AlphaFold", "Hidden Markov models (HTK, Kaldi)"] },
    { name: "Leadership", rank: { research: 4, engineering: 1 },
      items: ["Team and team-lead management", "Technical hiring", "Internship programs", "Sprint planning", "SOWs", "GxP validation"] },
    { name: "LLM agents", rank: { research: 3, engineering: 2 },
      items: ["Claude", "AI agent workflows", "MCP servers", "Agent skills for team workflows"] },
    { name: "MLOps and cloud", rank: { research: 5, engineering: 4 },
      items: ["Docker", "Kubernetes", "Cloud platforms", "CI/CD", "MLflow", "Weights &amp; Biases", "ONNX"] },
    { name: "Coding", rank: { research: 2, engineering: 5 },
      items: ["Python", "C/C++", "Java/JEE", "SQL", "Bash"] },
    { name: "Data", rank: { research: 6, engineering: 6 },
      items: ["PostgreSQL", "MySQL", "Oracle", "HDF"] },
    { name: "Languages", rank: { research: 7, engineering: 7 },
      items: ["Arabic", "French", "English"] }
  ],

  /* ---------------------------------------------------------------------
     EDUCATION
     --------------------------------------------------------------------- */
  education: [
    { title: "PhD in Computer Science", school: "ENIS, National School of Engineers of Sfax", place: "Sfax, Tunisia", dates: "2015 to June 2021",
      note: "Thesis: <em>Keyword Spotting in Printed and Handwritten Multi-Script Document Images</em>. Defended with honors (Mention Honorable). Supervisors: Yousri Kessentini and Slim Kanoun." },
    { title: "Computer Science Engineer", school: "FST, Faculty of Sciences of Tunis", place: "Tunis, Tunisia", dates: "Sep 2010 to Aug 2013", note: "" },
    { title: "Preparatory Classes for Engineering (Math and Physics)", school: "IPEIS, Sfax Preparatory Engineering Institute", place: "Sfax, Tunisia", dates: "Sep 2008 to Aug 2010", note: "" },
    { title: "Computer Science Baccalaureate, with honors", school: "Hedi Soussi School", place: "Sfax, Tunisia", dates: "Sep 2007 to Jun 2008", note: "" }
  ],

  /* ---------------------------------------------------------------------
     CERTIFICATIONS (credential ids from LinkedIn)
     --------------------------------------------------------------------- */
  certifications: [
    { title: "Efficient Large Language Model (LLM) Customization", issuer: "NVIDIA Deep Learning Institute", date: "Jan 2025", id: "HwomMCFfS7ejXugjIm5YWQ", href: "https://learn.nvidia.com/certificates?id=HwomMCFfS7ejXugjIm5YWQ" },
    { title: "Deploying RAG Pipelines for Production at Scale", issuer: "NVIDIA Deep Learning Institute", date: "Jan 2025", id: "fivJbDG5S7-FpD_Lg0mARA", href: "https://learn.nvidia.com/certificates?id=fivJbDG5S7-FpD_Lg0mARA" },
    { title: "Generative AI with Diffusion Models", issuer: "NVIDIA Deep Learning Institute", date: "Dec 2023", id: "5b4dcd8475434bbab9796572601ed101", href: "https://courses.nvidia.com/certificates/5b4dcd8475434bbab9796572601ed101/" },
    { title: "University Ambassador Certification", issuer: "NVIDIA Deep Learning Institute", date: "Feb 2022", id: "58c52721db274bbb9dd301a208b72729", href: "https://courses.nvidia.com/certificates/58c52721db274bbb9dd301a208b72729" },
    { title: "Machine Learning DevOps Engineer Nanodegree", issuer: "Udacity", date: "Jan to May 2022", id: "", href: "" },
    { title: "Building Transformer-Based Natural Language Processing Applications", issuer: "NVIDIA Deep Learning Institute", date: "Jan 2022", id: "06d634ca84cf492f9ca8e07690551e54", href: "" },
    { title: "Fundamentals of Deep Learning for Multi-GPUs", issuer: "NVIDIA Deep Learning Institute", date: "Jan 2022", id: "158890fc75df4147b04470929b65b7d0", href: "" },
    { title: "Fundamentals of Deep Learning", issuer: "NVIDIA Deep Learning Institute", date: "Jan 2022", id: "21522835b1264f5ebc3846673a1176b3", href: "" },
    { title: "Fundamentals of Deep Learning for Multiple Data Types", issuer: "NVIDIA Deep Learning Institute", date: "Mar 2019", id: "885951a2946b4534a747718392e10909", href: "" },
    { title: "Fundamentals of Deep Learning for Computer Vision", issuer: "NVIDIA Deep Learning Institute", date: "", id: "", href: "" }
  ]
};
