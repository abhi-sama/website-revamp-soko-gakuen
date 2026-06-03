# Soko Gakuen — Site Content Audit

Scraped from **https://sokogakuen.org/** on 2026-06-03.
This document drives the feature and content inventory for the Next.js rebuild.

---

## Site Map

| # | Original URL | New Route | Status |
|---|-------------|-----------|--------|
| 1 | `/` (index.html) | `/` | ✅ Implemented |
| 2 | `/schedule.html` | `/schedule` | ✅ Implemented |
| 3 | `/courses.html` | `/courses` | ✅ Implemented |
| 4 | `/enroll.html` | `/enroll` | ✅ Implemented |
| 5 | `/eval-exam.html` | `/eval-exam` | ✅ Implemented |
| 6 | `/byScholarship.html` | `/scholarships` | ✅ Implemented |
| 7 | `/sensei.html` | `/faculty` | ✅ Implemented |
| 8 | `/info.html` | `/directions` | ✅ Implemented |
| 9 | `/sokobro-chi.html` | `/children` | ✅ Implemented |
| 10 | `/missionStatementSG.html` | `/mission` | ✅ Implemented |
| 11 | `/extra.html` | `/extra` | ✅ Implemented |
| 12 | *(new)* | `/contact` | ✅ Implemented |

---

## Navigation Items

| Label | Destination | Notes |
|-------|-------------|-------|
| Home | `/` | |
| Schedule | `/schedule` | |
| Courses | `/courses` | |
| Enrollment | `/enroll` | |
| Faculty | `/faculty` | |
| Scholarships | `/scholarships` | |
| Eval & Exams | `/eval-exam` | |
| Directions | `/directions` | |
| Children's Classes | `/children` | |
| Contact | `/contact` | |

---

## Page-by-Page Content Inventory

### 1. Home Page (`/`)

**Sections:**
- **Hero banner** — school name "Soko Gakuen Japanese Language School", tagline "San Francisco's Most Comprehensive Japanese Language School", sub-copy about nonprofit status / since 1915 / quality instruction at reasonable rates
- **About blurb** — brief school history and mission paragraph
- **Why Choose Us** — 4-point feature cards (ACTFL guidelines, nonprofit, experienced instructors, flexible schedule)
- **Term calendar** — upcoming term dates for Spring / Summer / Fall / Winter 2026
- **Quick Links grid** — links to all major sections
- **Contact info box** — address (1881 Bush St, Suite 120, San Francisco, CA 94109), phone (415-567-4797), email (sokogakuen@gmail.com)

**Interactive features:** None (static)

---

### 2. Schedule (`/schedule`)

**Sections:**
- **4-term overview table** — Spring, Summer, Fall, Winter with start/end dates and registration open/close dates
- **Summer 2026 detailed class grid** — grouped by day/time:
  - Saturday Morning: Beginning Conversation, Beginning 1, Beginning 2, Beginning 3
  - Saturday Afternoon: Intermediate 1, Intermediate 2, JLPT N5 Prep, JLPT N4 Prep
  - Monday/Wednesday Evening: Beginning Conversation 2, Intermediate 3–6, JLPT N3/N2, Practical Communication, Reading Comprehension
- **Fee note** — $260/course (10-week term)

**Interactive features:** None (static table)

---

### 3. Courses (`/courses`)

**Sections:**
- **Course catalog cards** — one card per course:
  - Beginning Conversation (all levels welcome, no textbook)
  - Beginning 1 (Hiragana/Katakana, Genki I Ch 1–6)
  - Beginning 2 (Genki I Ch 7–12)
  - Beginning 3 (Genki II Ch 13–18)
  - Beginning Conversation 2 (post-Beg 1 oral practice)
  - Intermediate 1–3 (Genki II, Tobira Ch 1–5)
  - Intermediate 4–6 (Tobira Ch 6–15, advanced grammar)
  - JLPT N5 / N4 / N3 / N2 Prep (exam-focused with past-test practice)
  - Practical Communication (business Japanese)
  - Reading Comprehension (newspaper/magazine texts)
- Each card includes: level badge, textbook, course description

**Interactive features:** None (static)

---

### 4. Enrollment (`/enroll`)

**Sections:**
- **Tuition info** — $260 per 10-week course, $25 registration fee (waived for returning students), materials fee varies
- **Enrollment policies** — refund policy (100% before week 2, 50% before week 4, no refund after), prerequisite placement policy
- **Registration form** (static mockup — downloadable PDF on original site) — fields: name, address, phone, email, course(s) requested, payment method
- **Steps to enroll** — numbered list: choose course → check prerequisites → complete form → submit with payment

**Interactive features:** Enrollment form (static mockup; original uses printable PDF)

---

### 5. Evaluation & Exams (`/eval-exam`)

**Sections:**
- **Final exam policy** — must score ≥ 80% on both written and oral exams to receive certificate
- **Certificate of Completion** — issued per course to students meeting the 80/80 rule
- **ACTFL Standards** — Soko Gakuen aligns to ACTFL Proficiency Guidelines (Novice → Intermediate → Advanced → Superior)
- **PT300 reference** — placement test / proficiency test description
- **Exam schedule note** — exams held in the final week of each term

**Interactive features:** None

---

### 6. Scholarships (`/scholarships`)

**Sections:**
- **Ben Yoshikawa Scholarship** — $1,000 award, offered annually
  - Eligibility: San Francisco resident, U.S. citizen/permanent resident, financial need demonstrated, enrolled or accepted at Soko Gakuen
- **Application details** — deadline, required documents (essay, proof of enrollment, financial statement)
- **Past recipients note**

**Interactive features:** None (application submitted by mail per original site)

---

### 7. Faculty (`/faculty`)

**Sections:**
- **Instructor roster** — 9 instructors with name, credentials, and bio:
  1. Instructor A — M.A. Japanese Linguistics, UC Berkeley
  2. Instructor B — Native speaker, 15+ years teaching
  3. Instructor C — JLPT N1, advanced literature focus
  4. Instructor D — Business Japanese specialist
  5. Instructor E — Beginner curriculum lead
  6. Instructor F — Children's program director
  7. Instructor G — ACTFL OPI tester
  8. Instructor H — Reading/Writing specialist
  9. Instructor I — JLPT exam prep specialist
- **Academic Affairs Committee** — governance note

**Interactive features:** None

---

### 8. Directions (`/directions`)

**Sections:**
- **Primary address** — 1881 Bush St, Suite 120, San Francisco, CA 94109 (Japan Center area)
- **Secondary address** — alternative class location (Japantown community center)
- **Public transit** — MUNI bus lines, nearest BART station
- **Parking** — Japan Center garage note
- **Google Maps embed** — interactive iframe to the school location

**Interactive features:** Google Maps embed

---

### 9. Children's Classes (`/children`)

**Sections:**
- **Program overview** — ages 5–14, Saturday mornings
- **Curriculum levels** — Children's 1 (hiragana), Children's 2 (katakana + basics), Children's 3 (kanji introduction)
- **Smartphone Free School policy** — no smartphones during class
- **Tuition** — $200/term for children's classes
- **Enrollment note** — separate registration process for minors (guardian signature required)

**Interactive features:** None

---

### 10. Mission Statement (`/mission`)

**Sections:**
- **Full mission statement** — Soko Gakuen's educational philosophy and community purpose
- **Quote 1** — Laozi: "A journey of a thousand miles begins with a single step"
- **Quote 2** — Mark Twain: "Travel is fatal to prejudice, bigotry, and narrow-mindedness…"
- **History note** — founded 1915, community anchor for Japanese-American cultural exchange

**Interactive features:** None

---

### 11. Extra Resources (`/extra`)

**Sections:**
- **Grades repository link** — external portal for students to view grades
- **Vimeo video embed** — school promotional/informational video
- **External links** — ACTFL website, Japan Foundation, JLPT official site, Japan Center SF

**Interactive features:** Vimeo embed

---

### 12. Contact (`/contact`) *(new page)*

**Sections:**
- **Contact form** — fields: Name (required), Email (required), Phone (optional), Subject (required), Message (required)
- **Direct contact info** — address, phone, email repeated
- **Form submission** — POST to `/api/contact` → Resend → sokogakuen@gmail.com

**Interactive features:** ✅ Contact form wired to Resend

---

## Interactive Features Summary

| Feature | Original Implementation | Rebuilt Implementation |
|---------|------------------------|----------------------|
| Contact/inquiry form | Plain HTML form (action mailto or PHP) | `/contact` page + `/api/contact` route → Resend |
| Google Maps | iframe embed | iframe embed (same approach) |
| Vimeo video | iframe embed | iframe embed (same approach) |
| Schedule table | Static HTML table | shadcn Table component |
| Grades portal | External link | External link preserved |
| PDF enrollment form | Downloadable PDF link | Static form mockup + policy text |

---

## Content Preservation Checklist

- [x] All 10 original pages mapped to new routes
- [x] Navigation items (10) all present in rebuilt Nav component
- [x] School address, phone, email in Footer and Directions page
- [x] All 9 course descriptions with textbook references
- [x] All 9 faculty bios
- [x] Full 4-term schedule with Summer 2026 class grid
- [x] Ben Yoshikawa Scholarship details ($1,000, 4 eligibility criteria)
- [x] Eval/exam policies (80/80 rule, ACTFL, PT300)
- [x] Children's classes program (ages 5–14, Smartphone Free policy)
- [x] Full mission statement + quotes
- [x] External links (grades portal, ACTFL, Japan Foundation, JLPT)
- [x] Vimeo embed
- [x] Google Maps embed
- [x] Contact form → Resend (new, replaces legacy mailto/PHP)
