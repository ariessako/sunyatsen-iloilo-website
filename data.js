/* =========================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE CONTENT.
   - Text goes between quotes "like this".
   - verified: true  = confirmed fact (no note shown)
   - verified: false = shows a small "To be confirmed" note
   ========================================================= */

const SCHOOL = {
  name: "Sun Yat Sen High School of Iloilo",
  nickname: "Tiong San",
  founded: 1925,
  address: "Mapa Street, Iloilo City, Philippines",
  phone: "",          // e.g. "(033) 123 4567"
  email: "",          // e.g. "info@school.edu.ph"
  facebook: "https://www.facebook.com/p/Sun-Yat-Sen-High-School-61568962567340/",
  officeHours: "Monday to Friday, 8:00 AM - 5:00 PM (to be confirmed)"
};

/* The learning path, in order from youngest to oldest. */
const PROGRAMS = [
  {
    level: "Preschool",
    grades: "Pre-Nursery to Kinder 2",
    description: "A warm, play-based start where young learners build early reading, numbers and social skills, with their first Mandarin words.",
    highlights: ["Early literacy and numeracy", "Songs, arts and play", "Intro to Mandarin"]
  },
  {
    level: "Elementary",
    grades: "Grades 1 to 6",
    description: "The DepEd K to 12 curriculum builds strong foundations in English, Filipino, Math and Science, alongside daily Chinese classes.",
    highlights: ["DepEd core subjects", "Chinese language", "Values formation"]
  },
  {
    level: "Junior High School",
    grades: "Grades 7 to 10",
    description: "Deeper study of the sciences, mathematics and humanities, with clubs and varsity sports where students find their strengths.",
    highlights: ["Science and Math", "Chinese language", "Blue Lions varsity"]
  },
  {
    level: "Senior High School",
    grades: "Grades 11 to 12",
    description: "Two academic strands that prepare students for college and careers.",
    strands: [
      { name: "STEM", text: "Science, Technology, Engineering and Mathematics, for future engineers, doctors, nurses and IT professionals." },
      { name: "ABM", text: "Accountancy, Business and Management, for future accountants, entrepreneurs and business leaders." }
    ],
    highlights: ["Research", "Work immersion", "College readiness"]
  }
];

/* =========================================================
   NEWS AND AWARDS
   Each item becomes a card. Clicking it opens its own news page.
   - id:     short name with dashes, no spaces (used in the page link)
   - photo:  put the picture in the assets folder, e.g. "assets/news/basketball-2015.jpg"
             Leave "" if there is no photo yet.
   - body:   the full story. Each line in the list is one paragraph.
   - link:   the original Facebook post (or news article) link
   - Put the NEWEST award at the TOP of the list. The first one is featured.
   ========================================================= */
const NEWS = [
  {
    "id": "issdl-basketball-boys-third-2026",
    "title": "Basketball Boys Secure Third Place in ISSDL",
    "who": "SYSHSII Basketball Boys Team",
    "event": "Iloilo Secondary Schools Development League (ISSDL), Under-16",
    "level": "City",
    "category": "Sports",
    "date": "October 25, 2026",
    "photo": "assets/news/SYSHSII-award_22_2026-10-25_basketball-boys-issdl-third-place.jpg",
    "summary": "The boys' basketball team placed third in the ISSDL Under-16 division, another milestone for the school's growing sports program.",
    "body": [
      "IN PHOTOS | SUN YAT SEN BASKETBALL BOYS SECURE THIRD PLACE IN ISSDL",
      "The Sun Yat Sen High School of Iloilo, Inc. Basketball Boys Team clinched third place in the Iloilo Secondary Schools Development League (ISSDL) under 16, marking another achievement for the school’s growing sports program.",
      "Through teamwork, discipline, and determination, the Tiongsanista athletes demonstrated their competitive spirit on the basketball court, representing their school with pride and sportsmanship.",
      "This achievement reflects the team’s commitment to the sport and the collective effort of the athletes and their coaches throughout the competition.",
      "Congratulations to our Basketball Boys Team for this commendable finish! The entire Sun Yat Sen community celebrates your achievement and wishes you continued success in your future competitions.",
      "Another milestone. Another reason to be proud. Padayon, Tiongsanista!",
      "Photo Credits: Dex Kokak Paka"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122192844944632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "boys-girls-week-2026",
    "title": "Two Tiongsanistas, Two Leadership Roles",
    "who": "Bea Denise Militar (Girl City Councilor) and Cid Cayden Ligasan (Head, Iloilo City Local Housing Unit)",
    "event": "Boys and Girls Week 2026, Iloilo City (October 19–23)",
    "level": "City",
    "category": "Leadership",
    "date": "October 9, 2026",
    "photo": "assets/news/SYSHSII-award_24_2026-10-09_boys-girls-week-leadership-roles.jpg",
    "summary": "Two students were chosen to serve in Iloilo City government roles during Boys and Girls Week 2026.",
    "body": [
      "TWO TIONGSANISTAS, TWO LEADERSHIP ROLES, ONE PROUD MOMENT!",
      "We are proud to announce that Bea Denise Militar and Cid Cayden Ligasan will represent the youth during Boys and Girls Week 2026!",
      "Bea Denise Militar will serve as the City Councilor counterpart of Hon. Johnny Young, gaining valuable experience in local legislation and public service.",
      "Cid Cayden Ligasan will serve as the Head of the Iloilo City Local Housing Unit, taking on a leadership role that will provide him with meaningful exposure to public administration and community service.",
      "Their participation is more than an achievement—it is an opportunity to learn, lead, and serve. Their presence in these roles reflects the leadership potential and values that Tiongsanistas carry wherever they go.",
      "We are happy and proud to see our students stepping beyond the classroom and into the community.",
      "A testament that Tiongsanistas can shine anywhere."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122191329344632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "regional-taekwondo-silver-2026",
    "title": "Silver at the Regional Interschool Taekwondo Championship",
    "who": "Carl Matthew Loreno Jacobo, Grade School",
    "event": "Regional Interschool Taekwondo Championship 2026 — Individual Poomsae",
    "level": "Regional",
    "category": "Sports",
    "date": "September 20, 2026",
    "photo": "assets/news/SYSHSII-award_01_2026-09-20_regional-taekwondo-silver-jacobo.jpg",
    "summary": "A Grade School student won silver in Individual Poomsae at the regional interschool taekwondo championship.",
    "body": [
      "REGIONAL INTERSCHOOL TAEKWONDO CHAMPIONSHIP 2026",
      "A proud moment for our young athlete!",
      "Congratulations to Carl Matthew Loreno Jacobo of the Grade School Division for clinching the Silver Medal in Individual Poomsae!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122189214806632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "prisaa-taekwondo-bronze-2026",
    "title": "Four Bronze Medals in PRISAA 2026 Taekwondo",
    "who": "Elisha Paradero (Individual Poomsae); Joannah De Asis, Zada Alpas and Blesie Gumban (Kyorugi)",
    "event": "PRISAA 2026 — Taekwondo",
    "level": "PRISAA",
    "category": "Sports",
    "date": "September 14, 2026",
    "photo": "assets/news/SYSHSII-award_25_2026-09-14_prisaa-taekwondo-bronze.jpg",
    "summary": "Four taekwondo athletes finished with bronze medals at PRISAA 2026: one in poomsae and three in kyorugi (sparring).",
    "body": [
      "PRISAA 2026 | TAEKWONDO",
      "Congratulations to our outstanding Taekwondo athletes for their impressive performances and bronze-medal finishes at PRISAA 2026!",
      "Individual Poomsae: Elisha Paradero",
      "Kyorugi: Joannah De Asis, Zada Alpas, Blesie Gumban",
      "Your dedication, discipline, and fighting spirit make us proud! Keep training, keep improving, and continue to shine, Tiongsanistas!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122188703894632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "charter-day-table-tennis-2026",
    "title": "Charter Day Table Tennis Champion",
    "who": "Yam Teodoro — Champion, Girls Division (8–11); Ezekiel Ampongan and Kendrick Avaricio to represent the school at the Division Meet",
    "event": "89th Iloilo City Charter Day Celebration — Chawi Sports Center Table Tennis Tournament",
    "level": "City",
    "category": "Sports",
    "date": "September 2, 2026",
    "photo": "assets/news/SYSHSII-award_03_2026-09-02_charter-day-table-tennis-teodoro.jpg",
    "summary": "Yam Teodoro was Girls Division champion at the Charter Day table tennis tournament, and two boys will represent the school at the city Division Meet.",
    "body": [
      "We proudly recognize our outstanding table tennis players for their remarkable achievements at the recently concluded 89th Iloilo City Charter Day Celebration – Chawi Sports Center Table Tennis Tournament!",
      "Teodoro, Yam – CHAMPION, Girls Division (8–11 Years Old)",
      "We also proudly congratulate our athletes who will represent the school in the upcoming Iloilo City Division Meet: Ampongan, Ezekiel and Avaricio, Kendrick.",
      "Your dedication, hard work, and passion for the sport continue to bring pride and honor to our school. Keep serving, smashing, and aiming for greatness!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122187756404632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "iloprisaa-volleyball-boys-2026",
    "photoFit": "contain",
    "title": "Volleyball Boys Finish 3rd Runner-Up in ILOPRISAA",
    "who": "SYSHSII Volleyball Boys Team",
    "event": "ILOPRISAA 2026–2027 Volleyball, Secondary Level (Boys)",
    "level": "ILOPRISAA",
    "category": "Sports",
    "date": "August 31, 2026",
    "photo": "assets/news/SYSHSII-award_04_2026-08-31_iloprisaa-volleyball-boys-3rd-runner-up.jpg",
    "summary": "The boys' volleyball team finished 3rd Runner-Up in the ILOPRISAA 2026–2027 secondary boys' volleyball competition.",
    "body": [
      "OFFICIAL RESULT | ILOPRISAA 2026–2027 VOLLEYBALL BOYS – SECONDARY LEVEL",
      "Congratulations to the Volleyball Boys Team for officially securing the 3rd Runner-Up title in the ILOPRISAA 2026–2027 Volleyball Competition – Secondary Level (Boys)!",
      "Your hard work, determination, teamwork, and fighting spirit truly paid off! We are incredibly proud of the entire team and coaches for representing SYS with pride and excellence."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122187558962632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "peac-full-compliance-2026",
    "photoFit": "contain",
    "title": "PEAC Certification with Full Compliance",
    "who": "Sun Yat Sen High School of Iloilo, Inc. — Junior High School",
    "event": "PEAC Certification (Recert-Revisit), DepEd ID 404189",
    "level": "National",
    "category": "School",
    "date": "August 28, 2026",
    "photo": "assets/news/SYSHSII-award_05_2026-08-28_peac-certification-full-compliance.jpg",
    "summary": "The school earned PEAC Certification with Full Compliance for its Junior High School program.",
    "body": [
      "A PROUD MILESTONE FOR SUN YAT SEN HIGH SCHOOL OF ILOILO, INC.!",
      "We are proud to announce that Sun Yat Sen High School of Iloilo, Inc. has officially achieved PEAC Certification with Full Compliance!",
      "This recognition reflects our school’s continued commitment to quality education, excellence, accountability, and the continuous improvement of our programs and services.",
      "Being officially verified by PEAC is a testament to the dedication and collective efforts of our administrators, teachers, staff, students, parents, and the entire school community.",
      "PEAC Certified · Certification Status: Full Compliance · Certification Type: Recert-Revisit · Junior High School | DepEd ID: 404189",
      "Congratulations, Tiongsanistas! This achievement is not just a recognition—it is a reflection of our shared commitment to providing quality education and building a stronger future for our learners.",
      "The full certification details can be verified at cert-check.peac.org.ph (PCC-2026-2F7AVID4)."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122187299642632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "prisaa-table-tennis-2026",
    "title": "13 Silver and 10 Bronze in PRISAA 2026 Table Tennis",
    "who": "Elementary Boys, Elementary Girls and High School Girls table tennis teams, plus five individual medalists",
    "event": "PRISAA 2026 — Table Tennis",
    "level": "PRISAA",
    "category": "Sports",
    "date": "August 26, 2026",
    "photo": "assets/news/SYSHSII-award_06_2026-08-26_prisaa-table-tennis-medals.jpg",
    "summary": "The table tennis squads won 13 silver and 10 bronze medals at PRISAA 2026 across team and individual play.",
    "body": [
      "Congratulations to our amazing Table Tennis athletes for their outstanding performance in PRISAA 2026! Your hard work, teamwork, discipline, and determination have truly paid off!",
      "TEAM PLAY",
      "Elementary Boys – 2nd Place, 6 Silver Medals: Ezekiel Ampongan (Grade 6), Ken Avaricio (Grade 6), Renz Herosa (Grade 6), Ben Escarrilla (Grade 5), Carl Jacobo (Grade 6), Schyller Pielago (Grade 3)",
      "Elementary Girls – 2nd Place, 6 Silver Medals: Yam Teodoro (Grade 6), Alhailey Lagaña (Grade 6), Brianna Salipsip (Grade 5), Christal Tamagos (Grade 5), Ezra Ampongan (Grade 4), Julliana Uy (Grade 4)",
      "High School Girls – 3rd Place, 6 Bronze Medals: Verily Sanchez (Grade 11), Ash Concepcion (Grade 11), Themis Canto (Grade 9), Sofia Reyes (Grade 9), Jan Tamudtamud (Grade 8), Starr Cerrudo (Grade 8)",
      "INDIVIDUAL PLAY",
      "Elementary Boys: Ezekiel Ampongan (Grade 6) – 2nd Place, Silver; Kendrick Avaricio – 3rd Place, Bronze",
      "Elementary Girls: Yam Teodoro (Grade 6) – 3rd Place, Bronze; Alhailey Lagaña (Grade 6) – 3rd Place, Bronze",
      "High School Boys: JM Chavez – 3rd Place, Bronze",
      "TOTAL MEDALS: 13 SILVER & 10 BRONZE!",
      "Your achievements are a testament to your dedication, teamwork, perseverance, and sportsmanship. Congratulations to all our athletes and coaches for bringing pride and honor to our school!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122187158114632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "iloprisaa-badminton-2026",
    "title": "ILOPRISAA 2026 Badminton Medalists",
    "who": "Ariannah Ace Belvis; Kyle David A. Del Sol; Aizen Clyde Barbecho; Keisel Alexis Prudente; Janrex Lorca; Hannah Claire De la Cruz",
    "event": "ILOPRISAA 2026 — Badminton",
    "level": "ILOPRISAA",
    "category": "Sports",
    "date": "August 23, 2026",
    "photo": "assets/news/SYSHSII-award_07_2026-08-23_iloprisaa-badminton-medals.jpg",
    "summary": "Badminton players won two silver and two bronze medals at ILOPRISAA 2026.",
    "body": [
      "A heartfelt congratulations to our amazing badminton players for your outstanding performance at ILOPRISAA 2026!",
      "Your achievement is more than just medals and awards — it is a beautiful reflection of your hard work, discipline, perseverance, teamwork, and determination.",
      "Behind every victory were countless hours of practice, sacrifices, and challenges, yet you continued to push forward. We are incredibly proud of each and every one of you.",
      "Thank you for representing our school with courage, humility, and pride, and for giving your very best both on and off the court. You have made us truly proud. Congratulations, champions!",
      "ELEMENTARY — Girls Singles: Ariannah Ace Belvis – Bronze. Boys Doubles: Kyle David A. Del Sol and Aizen Clyde Barbecho – Silver. Mixed Doubles: Keisel Alexis Prudente and Kyle David Del Sol – Silver.",
      "SECONDARY — Mixed Doubles: Janrex Lorca and Hannah Claire De la Cruz – Bronze.",
      "Coach: Apple Ma-at · Assistant Coach: Annelyn I. Alba"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122186887358632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "pocari-sweat-tryout-2026",
    "title": "Harvey Dela Cruz Qualifies for the Pocari Sweat Tryout",
    "who": "Harvey Dela Cruz",
    "event": "Pocari Sweat Tryout — Iloilo Level",
    "level": "Iloilo",
    "category": "Sports",
    "date": "July 25, 2026",
    "photo": "assets/news/SYSHSII-award_08_2026-07-25_harvey-dela-cruz-pocari-tryout.jpg",
    "summary": "Harvey Dela Cruz qualified at the Iloilo level of the Pocari Sweat Tryout and advances to the Regional and National levels.",
    "body": [
      "Congratulations to Harvey Dela Cruz!",
      "We are proud to announce that Harvey has qualified for the Pocari Sweat Tryout – Iloilo Level. He will proudly represent Tiongsan as he advances to the Regional and National levels.",
      "Good luck, Harvey! We are cheering for you all the way!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122184399812632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "national-poomsae-bronze-2026",
    "title": "Bronze at the 2026 National Poomsae Taekwondo Championships",
    "who": "Elisha Paradero",
    "event": "2026 National Poomsae Taekwondo Championships, Ninoy Aquino Stadium",
    "level": "National",
    "category": "Sports",
    "date": "July 8, 2026",
    "photo": "assets/news/SYSHSII-award_09_2026-07-08_elisha-paradero-national-poomsae-bronze.jpg",
    "summary": "Elisha Paradero won bronze in Team Poomsae and placed 11th of 29 in Individual Poomsae at the national championships.",
    "body": [
      "Congratulations to Elisha Paradero for your remarkable performance at the 2026 National Poomsae Taekwondo Championships held on July 5, 2026, at the Ninoy Aquino Stadium.",
      "Bronze Medalist – Team Poomsae (out of 9 competitors)",
      "11th Place – Individual Poomsae (out of 29 competitors)",
      "We are so proud of you!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122182820078632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "junior-regional-badminton-2026",
    "title": "Junior Regional Badminton Super 750 Visayas Champion",
    "who": "Prince Shon Ma-at — Champion, 16-Under Boys Doubles; Janrex Lorca — Bronze, 14-Under Boys Doubles",
    "event": "Junior Regional Badminton 2026 — Super 750 Visayas, Iloilo City",
    "level": "Regional",
    "category": "Sports",
    "date": "June 28, 2026",
    "photo": "assets/news/SYSHSII-award_10_2026-06-28_junior-regional-badminton-super750.jpg",
    "summary": "Prince Shon Ma-at won the 16-Under boys' doubles title and Janrex Lorca took bronze in 14-Under boys' doubles.",
    "body": [
      "We proudly celebrate the outstanding achievements of our athletes at the Junior Regional Badminton 2026 – Super 750 Visayas held in Iloilo City.",
      "Prince Shon Ma-at – 16 Under Boys Doubles – Champion",
      "Janrex Lorca – 14 Under Boys Doubles – Bronze Medalist",
      "We are incredibly proud of you!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122182008890632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "peac-deped-certified-2026",
    "photoFit": "contain",
    "title": "PEAC and DepEd Certified Status",
    "who": "Sun Yat Sen High School of Iloilo, Inc. — Junior High School",
    "event": "PEAC / DepEd certification under the GASTPE-ESC Program",
    "level": "National",
    "category": "School",
    "date": "June 18, 2026",
    "photo": "assets/news/SYSHSII-award_11_2026-06-18_peac-deped-certified-status-esc.jpg",
    "summary": "The school was granted Certified Status by PEAC and DepEd for its Junior High School program under GASTPE-ESC.",
    "body": [
      "Sun Yat Sen High School of Iloilo, Inc. proudly celebrates its Certified Status granted by PEAC and the Department of Education for successfully meeting the standards and requirements of the Junior High School Program under the GASTPE-ESC Program.",
      "This recognition reflects our unwavering commitment to educational excellence, quality learning, and continuous improvement in shaping future-ready learners."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122180976296632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "icsdbl-basketball-2026",
    "title": "Basketball Team Is 1st Runner-Up in ICSDBL",
    "who": "SYSHSII Basketball Team",
    "event": "Iloilo City Summer Developmental Basketball League (ICSDBL)",
    "level": "City",
    "category": "Sports",
    "date": "June 9, 2026",
    "photo": "assets/news/SYSHSII-award_12_2026-06-09_basketball-icsdbl-1st-runner-up.jpg",
    "summary": "The basketball team finished 1st Runner-Up in the Iloilo City Summer Developmental Basketball League.",
    "body": [
      "Congratulations, SYSHSII Basketball Team!",
      "Your hard work, determination, and teamwork have earned you the title of 1st Runner-Up in the ICSDBL (Iloilo City Summer Developmental Basketball League).",
      "This achievement reflects your dedication on and off the court. We are proud of your perseverance, sportsmanship, and fighting spirit. Keep striving, keep improving, and keep making the SYSHSII community proud!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122180238998632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "volleyball-individual-awards-2026",
    "title": "Finals MVP, Best Open Spiker and Best Server",
    "who": "Shania Sheen M. Coloso (Best Open Spiker and Finals MVP); Jelly Eunice J. Silvederio (Best Server)",
    "event": "Girls' volleyball tournament (not named in the post)",
    "level": "League",
    "category": "Sports",
    "date": "May 31, 2026",
    "photo": "assets/news/SYSHSII-award_13_2026-05-31_volleyball-coloso-silvederio-individual-awards.jpg",
    "summary": "Shania Sheen M. Coloso was named Best Open Spiker and Finals MVP, and Jelly Eunice J. Silvederio Best Server.",
    "body": [
      "We are incredibly proud to recognize the outstanding individual achievements of our players in the tournament:",
      "Shania Sheen M. Coloso – Best Open Spiker & Finals MVP",
      "Jelly Eunice J. Silvederio – Best Server",
      "Thank you for your dedication, talent, and heart. You both elevated the game when it mattered most!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122179513544632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "fpldvtc-u15-volleyball-2026",
    "title": "Girls' Volleyball Team Wins the FPLDVTC U-15 Championship",
    "who": "SYSHSII Girls' Volleyball Team",
    "event": "FPLDVTC U-15 Girls Developmental Volleyball League",
    "level": "League",
    "category": "Sports",
    "date": "May 31, 2026",
    "photo": "assets/news/SYSHSII-award_14_2026-05-31_volleyball-girls-fpldvtc-u15-champion.jpg",
    "summary": "The girls' volleyball team captured the championship of the FPLDVTC U-15 Girls Developmental Volleyball League.",
    "body": [
      "Congratulations to the Sun Yat Sen High School of Iloilo, Inc. girls' volleyball team for capturing the Champion title in the FPLDVTC U-15 Girls Developmental Volleyball League!",
      "All the hard work, early mornings, and endless drills paid off on the court. We are so incredibly proud of your dedication, teamwork, and heart."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122179495544632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "dulonan-jmq-basketball-2026",
    "title": "Champions On and Off the Court",
    "who": "Basketball team (1st Dulonan Basketball League) and 3x3 team (JMQ 3x3 LuzViMinda Cup, Iloilo Leg)",
    "event": "1st Dulonan Basketball League; JMQ 3x3 LuzViMinda Cup — Iloilo Leg",
    "level": "Local",
    "category": "Sports",
    "date": "April 24, 2026",
    "photo": "assets/news/SYSHSII-award_16_2026-04-24_dulonan-and-jmq-3x3-basketball-champions.jpg",
    "summary": "The basketball program won two titles: the 1st Dulonan Basketball League, with MVP and Mythical 5 honors, and the Iloilo leg of the JMQ 3x3 LuzViMinda Cup.",
    "body": [
      "CHAMPIONS ON AND OFF THE COURT!",
      "Sun Yat Sen High School of Iloilo, Inc. proudly celebrates the incredible achievements of our student-athletes!",
      "1st Dulonan Basketball League – CHAMPIONS. Led by outstanding performances from Kyle Dequino (MVP, Mythical 5), Jhiyan Escalanate (Mythical 5) and John Lucky Bernasol (Mythical 5).",
      "Together with the team: Mikhael Jan Salado, Yohan Carlo Paris, Venny Dave Bedos, Cid Cayden Ligasán, Mach Lauren Valencia, Khalil Zamora, Ram Christian Estimar, Yxel Cris Sampiano, Vinyel Bedos, Seth Christopher Casipe, Xavier Christian Naviamos, and Clyde Cayin Ligasán — your hard work and teamwork brought home the crown!",
      "JMQ 3x3 LuzViMinda Cup (Iloilo Leg) – CHAMPIONS. Congratulations to Shaun Andrew Porquez, Joerzel Shayne Montalbo, Johnny Solinap Jr., and Gemmo Russel Lemery for dominating the court and bringing pride to our school!",
      "Your dedication, discipline, and passion embody the true spirit of Sun Yat Sen High School. Continue to strive for excellence!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122176196804632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "wvraa-badminton-2026",
    "title": "WVRAA Badminton: Overall Champion, Elementary Girls",
    "who": "Lianna Veronika Caceres, Mia Sofia Villanueva, Izabel Praise Jayme, Andrenah Mapa and Francis Gabriel Arenga",
    "event": "Western Visayas Regional Athletic Association (WVRAA) Meet — Badminton",
    "level": "Regional",
    "category": "Sports",
    "date": "March 21, 2026",
    "photo": "",
    "summary": "The elementary badminton team were WVRAA overall champions and advance toward the Palarong Pambansa.",
    "body": [
      "CONGRATULATIONS, WVRAA Badminton Champs!",
      "Your hard work and dedication at the Elementary Level paid off. Keep shining and swinging to the Palarong Pambansa!",
      "Results: Lianna Veronika Caceres – Gold, Girls Singles (A); Mia Sofia Villanueva – Bronze, Girls Singles (B); Izabel Praise Jayme and Andrenah Mapa – Gold, Girls Doubles; Lianna Veronika Caceres and Francis Gabriel Arenga – Gold, Mixed Doubles. Overall Champion, Elementary Girls.",
      "Coach: Apple Ma-at · Assistant Coach: Annelyn I. Alba"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122172975398632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "panagbenga-badminton-2026",
    "title": "Two Silvers at the Panagbenga Festival National Badminton Tournament",
    "who": "Lianna Veronika Caceres (Girls 13-Under) and Prince Shon Ma-at (Boys 15-Under)",
    "event": "Panagbenga Festival National Badminton Tournament, Baguio City (February 28 – March 1, 2026)",
    "level": "National",
    "category": "Sports",
    "date": "March 6, 2026",
    "photo": "assets/news/SYSHSII-award_20_2026-03-06_panagbenga-national-badminton-silver.jpg",
    "summary": "Two players won silver at the Panagbenga Festival National Badminton Tournament in Baguio City.",
    "body": [
      "Congratulations!",
      "PANAGBENGA FESTIVAL NATIONAL BADMINTON TOURNAMENT, Baguio City",
      "Lianna Veronika Caceres – Silver, 13-Under Badminton Girls",
      "Prince Shon Ma-at – Silver, 15-Under Badminton Boys",
      "Coach: Devie Ann Ma-at (Coach Apol)",
      "We're proud of you."
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122171662802632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    "id": "fil-chinese-outstanding-student-2026",
    "title": "Victor Named a 33rd Filipino-Chinese Outstanding Student",
    "who": "Victor",
    "event": "33rd Filipino-Chinese Outstanding Student Award",
    "level": "National",
    "category": "Academic",
    "date": "March 5, 2026",
    "photo": "assets/news/SYSHSII-award_21_2026-03-05_victor-33rd-fil-chinese-outstanding-student.jpg",
    "summary": "Victor is one of only 12 students nationwide named a 33rd Filipino-Chinese Outstanding Student, and the only awardee from outside Manila.",
    "body": [
      "Warmest congratulations to Victor for being recognized as the 33rd Filipino-Chinese Outstanding Student. This prestigious distinction is awarded to only 12 students nationwide across the Philippines, making this achievement truly remarkable.",
      "Out of the twelve awardees, 11 are from the Manila area, while Victor stands as the sole representative from the provinces. This accomplishment brings great pride and honor not only to himself but also to the entire Sun Yat Sen High School of Iloilo, Inc. community.",
      "Your dedication, excellence, and perseverance continue to inspire many. We are immensely proud of you and wish you continued success in all your future endeavors.",
      "Congratulations once again!"
    ],
    "link": "https://www.facebook.com/61568962567340/posts/122171606684632085",
    "linkLabel": "View the post on Facebook",
    "verified": true
  },
  {
    id: "sbp-passerelle-2015",
    title: "Blue Lions Win the SBP-Passerelle Visayas Regional Finals",
    who: "Sun Yat Sen HS Basketball Team",
    event: "SBP-Passerelle Visayas Regional Finals",
    level: "Regional",
    category: "Sports",
    date: "2015",
    photo: "",
    summary: "The Blue Lions captured the Visayas regional title and earned a spot in the national finals.",
    body: [
      "The Sun Yat Sen High School basketball team captured the title at the 2015 SBP-Passerelle Visayas Regional Finals, alongside Ateneo de Iloilo in the twin tournament.",
      "The win earned the Blue Lions a place in the national finals."
    ],
    link: "https://www.spin.ph/tag/sun-yat-sen-high-school-of-iloilo",
    linkLabel: "Read the news coverage",
    verified: true
  },
  {
    id: "osci-2011",
    title: "Sun Yat Sen Joins the Outstanding Students Circle of Iloilo",
    who: "Sun Yat Sen High School of Iloilo",
    event: "Outstanding Students Circle of Iloilo (OSCI)",
    level: "City",
    category: "Leadership",
    date: "2011",
    photo: "",
    summary: "The school entered the OSCI winners circle, which recognizes outstanding student leaders in Iloilo.",
    body: [
      "In 2011, Sun Yat Sen of Iloilo was one of two schools newly added to the winners circle of the Outstanding Students Circle of Iloilo (OSCI)."
    ],
    link: "https://outstandingstudentscircleofiloilo.blogspot.com/2011/",
    linkLabel: "View the OSCI announcement",
    verified: true
  }

  /* ADD A NEW STORY: copy one of the entries above to the TOP of this list and fill it in.
     Put its photo in assets/news/ and set "photo" to "assets/news/your-file.jpg". */
];
