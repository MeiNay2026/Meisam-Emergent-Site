// Dedicated, deeply-optimized procedure pages — one per high-priority
// condition — distinct from the homepage's short Conditions.js teaser cards
// and from the /blog articles. These exist specifically to compete for
// high-intent searches like "gallbladder surgery dubai" and "hernia surgeon
// dubai", the same pattern competitor hospital/clinic sites already use and
// the same pattern Google's AI Overviews pull from (a thorough, structured,
// single-topic page beats a short homepage section every time).
//
// Priority order follows case volume / revenue priority: gallbladder first,
// hernia second. Add new entries here (and a matching sitemap.xml row) for
// the remaining planned pages — appendicitis, stomach & bowel, colon,
// endoscopy, second opinions — using the same shape.

export const conditionPages = [
  {
    slug: "gallbladder-surgery",
    tag: "Gallbladder",
    homeId: "gallbladder", // maps back to the Conditions.js card with this id
    title: "Gallbladder Surgery in Dubai | Dr. Meisam Lund",
    h1: "Gallbladder Surgery in Dubai",
    metaDescription:
      "Laparoscopic gallbladder removal (cholecystectomy) in Dubai with Dr. Meisam Lund, Swedish Board-Certified Consultant General Surgeon at American Hospital Dubai.",
    procedureName: "Laparoscopic Cholecystectomy",
    bodyLocation: "Gallbladder",
    quickAnswer:
      "Gallbladder surgery (cholecystectomy) removes a gallbladder affected by gallstones, inflammation or recurring pain. The large majority of cases are done using minimally invasive keyhole (laparoscopic) technique through a few small incisions, with most patients home the same or next day and back to normal activity within one to two weeks.",
    sections: [
      {
        heading: "What is gallbladder surgery?",
        paragraphs: [
          "Gallbladder surgery, medically called a cholecystectomy, removes the gallbladder, a small organ beneath the liver that stores bile. The gallbladder is not essential, and once it is removed, bile flows directly from the liver to the small intestine, so digestion continues normally for almost all patients.",
          "The operation is most often needed because of gallstones, hardened deposits that form inside the gallbladder and can cause pain, inflammation or blockage. Not every gallstone needs surgery, but once stones start causing symptoms or complications, surgical removal is usually the most effective and lasting treatment.",
        ],
      },
      {
        heading: "Signs you may need gallbladder surgery",
        paragraphs: [
          "The most common warning signs are sharp or cramping pain in the upper right abdomen, often after a fatty meal, pain that spreads to the back or right shoulder, nausea or vomiting, and bloating. Recurring attacks, even if each one settles on its own, are usually a sign that surgery will eventually be needed rather than a one-off issue.",
          "Fever, yellowing of the skin or eyes (jaundice), or pain that does not settle are signs of a more urgent problem, such as an infected or inflamed gallbladder, and need prompt medical attention rather than a routine appointment.",
        ],
      },
      {
        heading: "Complex and urgent cases",
        paragraphs: [
          "Not every gallbladder case is routine. An acutely inflamed or unusually large gallbladder, a patient with other health conditions, or an older patient can all add real complexity to what is normally a straightforward operation. Dr. Lund's trauma and emergency surgical training means these higher-risk and urgent cases are something he is specifically experienced in managing safely, rather than a situation that gets deferred or referred elsewhere.",
        ],
      },
      {
        heading: "What to expect during the procedure",
        paragraphs: [
          "The vast majority of gallbladder removals today are done laparoscopically: a camera and small instruments are passed through three or four small incisions, rather than one large cut. This generally means less pain, a shorter hospital stay and a faster return to normal activity compared with open surgery. The operation itself typically takes around 45 minutes to an hour under general anaesthesia.",
          "In a small number of cases, usually where inflammation or scarring makes the laparoscopic view unsafe, the operation is converted to an open approach partway through. This is a safety decision, not a complication, and is explained clearly beforehand as a possibility.",
        ],
      },
      {
        heading: "Recovery after gallbladder removal",
        paragraphs: [
          "Most patients go home the same day or the following morning. Mild shoulder-tip pain in the first day or two (from the gas used during surgery) and some soreness around the incisions are normal and settle quickly. Most people return to light activity within a few days and to full normal activity, including exercise, within one to two weeks.",
          "Diet does not usually need to change long-term, though easing back into fatty or heavy meals over the first couple of weeks tends to be more comfortable while the digestive system adjusts.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, trained at Karolinska University Hospital in Stockholm, with further clinical experience across Sweden, the USA and the UAE. He practises at American Hospital Dubai, Dubai Science Park, combining minimally invasive technique with a straightforward approach: surgery is recommended only when it offers genuine benefit, and every option is explained clearly before a decision is made.",
        ],
      },
      {
        heading: "Research & published work",
        paragraphs: [
          "Dr. Lund is a published author on gallbladder surgery technique. He co-authored \"Fundus first as the standard technique for laparoscopic cholecystectomy,\" published in Scientific Reports (Nature) in 2019, a review of 1,745 laparoscopic gallbladder removals performed over a decade. The study found that the fundus-first (\"dome-down\") approach — starting dissection from the top of the gallbladder rather than the duct area first — was associated with a markedly lower rate of bile duct injury than the conventional technique.",
          "This fundus-first technique is one of the approaches Dr. Lund draws on for difficult or inflamed gallbladders, where it can reduce the risk of injury to surrounding structures compared with a standard approach.",
          "Cengiz Y, Lund M, Jänes A, Lundell L, Sandblom G, Israelsson L. \"Fundus first as the standard technique for laparoscopic cholecystectomy.\" Sci Rep 9, 18736 (2019). https://doi.org/10.1038/s41598-019-55401-6",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does gallbladder surgery take?",
        a: "A standard laparoscopic cholecystectomy typically takes around 45 minutes to an hour, though more complex or inflamed cases can take longer.",
      },
      {
        q: "Is gallbladder removal surgery painful?",
        a: "Most patients describe manageable soreness around the small incisions and occasional shoulder-tip discomfort in the first day or two, controlled with standard pain relief. Severe pain is uncommon.",
      },
      {
        q: "How soon can I go home after gallbladder surgery?",
        a: "Most patients are discharged the same day or the following morning after a laparoscopic procedure, assuming no complications.",
      },
      {
        q: "What foods should I avoid after gallbladder removal?",
        a: "No specific long-term diet is required for most people. Easing into fatty or heavy meals gradually over the first couple of weeks is usually more comfortable while digestion adjusts.",
      },
      {
        q: "Can gallstones come back after gallbladder surgery?",
        a: "No — once the gallbladder itself is removed, stones cannot form again in that location. Very rarely, stones can be left behind in the bile duct, which is why any new symptoms afterward should be checked.",
      },
      {
        q: "How much does gallbladder surgery cost in Dubai?",
        a: "Cost depends on factors like whether the case is routine or complex, length of hospital stay, and insurance coverage. Call American Hospital Dubai directly for a personalised quote based on your case and insurance.",
      },
      {
        q: "Where can I see Dr. Lund for gallbladder surgery in Dubai?",
        a: "Dr. Meisam Lund practises at American Hospital Dubai, Dubai Science Park. Call to book a consultation, or use the WhatsApp button on this site to ask a question first.",
      },
    ],
  },
  {
    slug: "hernia-surgery",
    tag: "Hernia",
    homeId: "hernia",
    title: "Hernia Surgery in Dubai | Dr. Meisam Lund",
    h1: "Hernia Surgery in Dubai",
    metaDescription:
      "Inguinal, umbilical and incisional hernia repair in Dubai with Dr. Meisam Lund, Swedish Board-Certified Consultant General Surgeon at American Hospital Dubai.",
    procedureName: "Laparoscopic and Open Hernia Repair",
    bodyLocation: "Abdominal wall",
    quickAnswer:
      "Hernia surgery repairs a bulge where internal tissue pushes through a weak point in the abdominal wall, most often in the groin (inguinal), navel (umbilical) or a previous surgical scar (incisional). Most repairs today use minimally invasive laparoscopic technique with mesh reinforcement, and patients typically return to full normal activity within two to four weeks.",
    sections: [
      {
        heading: "What is a hernia, and when does it need surgery?",
        paragraphs: [
          "A hernia occurs when tissue, often part of the intestine or fatty tissue, pushes through a weak spot in the muscles of the abdominal wall, creating a visible or palpable bulge. Hernias do not heal on their own and only ever get larger over time, though the pace varies a great deal from person to person.",
          "Not every hernia needs immediate surgery. A small, painless hernia can sometimes be safely monitored, particularly if someone has other health conditions that make surgery higher risk. But a hernia that is growing, causing pain, or becoming difficult to push back in should be assessed, since the main danger is a trapped or strangulated hernia, which is a surgical emergency.",
        ],
      },
      {
        heading: "Types of hernias treated",
        paragraphs: [
          "The most common types are inguinal hernias (in the groin, by far the most frequent type, especially in men), umbilical hernias (at the belly button), and incisional hernias (developing at the site of a previous surgical scar). Less commonly, femoral and ventral hernias occur elsewhere in the abdominal wall. Dr. Lund treats all of these, including complex or recurrent hernias that have been repaired before.",
        ],
      },
      {
        heading: "Signs you may need hernia repair",
        paragraphs: [
          "The clearest sign is a bulge that is visible or noticeable to the touch, often more obvious when standing, coughing or straining, and that may disappear when lying down. Discomfort, aching or a dragging sensation, especially with activity, is common. Sudden severe pain, a hernia that will not push back in, or nausea and vomiting alongside it are signs of a possible emergency and need urgent attention.",
        ],
      },
      {
        heading: "Open vs. laparoscopic repair — how Dr. Lund decides",
        paragraphs: [
          "Both open and laparoscopic (keyhole) approaches are safe and effective, and the right choice depends on the hernia's size, location, whether it is a first repair or a recurrence, and the patient's own health and preferences. Laparoscopic repair generally means smaller scars and a faster early recovery; open repair is sometimes the better choice for larger, more complex or recurrent hernias. Most repairs, regardless of approach, use a surgical mesh to reinforce the weakened area and reduce the chance of recurrence.",
          "Dr. Lund talks through the options honestly for each individual case rather than defaulting to one technique, and explains the reasoning behind the recommendation before any decision is made.",
        ],
      },
      {
        heading: "Recovery after hernia surgery",
        paragraphs: [
          "Most patients go home the same day. Soreness and some swelling around the repair site are normal in the first week or two. Light daily activity usually resumes within a few days, while a full return to exercise, heavy lifting or strenuous activity typically takes two to four weeks, depending on the repair's size and approach.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, trained at Karolinska University Hospital in Stockholm, with further clinical experience across Sweden, the USA and the UAE. He practises at American Hospital Dubai, Dubai Science Park, and tailors each hernia repair, open or laparoscopic, around the patient rather than a one-size-fits-all approach.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do all hernias need surgery?",
        a: "Not immediately. A small, painless hernia can sometimes be safely monitored, but hernias do not heal on their own and only grow over time, so most are repaired eventually, and any sudden pain or a hernia that won't push back in needs urgent attention.",
      },
      {
        q: "What is the difference between open and laparoscopic hernia repair?",
        a: "Open repair uses a single incision directly over the hernia; laparoscopic repair uses several small incisions and a camera. Both are safe and effective — the right choice depends on the hernia's size, location, and whether it's a first repair or a recurrence.",
      },
      {
        q: "How long is recovery after hernia surgery?",
        a: "Most patients go home the same day, resume light activity within a few days, and return to full normal activity, including exercise and heavy lifting, within two to four weeks.",
      },
      {
        q: "Can a hernia come back after surgery?",
        a: "Recurrence is possible but uncommon with modern mesh-reinforced repair. Risk is lowest when the repair technique matches the hernia type and the patient follows post-operative activity guidance during healing.",
      },
      {
        q: "Is hernia surgery painful?",
        a: "Most patients have manageable soreness around the repair site for one to two weeks, controlled with standard pain relief. Severe or worsening pain after surgery should always be checked.",
      },
      {
        q: "How much does hernia surgery cost in Dubai?",
        a: "Cost depends on the hernia's size and location, whether mesh repair is used, hospital stay length, and insurance coverage. Call American Hospital Dubai directly for a personalised quote.",
      },
      {
        q: "Where can I see Dr. Lund for hernia surgery in Dubai?",
        a: "Dr. Meisam Lund practises at American Hospital Dubai, Dubai Science Park. Call to book a consultation, or use the WhatsApp button on this site to ask a question first.",
      },
    ],
  },
  {
    slug: "appendicitis-emergency-surgery",
    tag: "Emergency Surgery",
    homeId: "emergency",
    title: "Appendicitis & Emergency Abdominal Surgery in Dubai | Dr. Meisam Lund",
    h1: "Appendicitis & Emergency Abdominal Surgery in Dubai",
    metaDescription:
      "Appendicitis and emergency abdominal surgery in Dubai with Dr. Meisam Lund, Level I trauma-trained Consultant General Surgeon at American Hospital Dubai.",
    procedureName: "Laparoscopic Appendectomy and Emergency Abdominal Surgery",
    bodyLocation: "Abdomen",
    quickAnswer:
      "Appendicitis is inflammation of the appendix that usually needs prompt surgical removal (appendectomy) to prevent rupture. Most cases today are treated laparoscopically, with patients typically home within one to two days and back to normal activity within one to two weeks.",
    sections: [
      {
        heading: "What is appendicitis?",
        paragraphs: [
          "The appendix is a small pouch attached to the large intestine. When it becomes blocked and inflamed, the result is appendicitis, one of the most common causes of emergency abdominal surgery. Left untreated, an inflamed appendix can rupture, which turns a routine operation into a more serious one, so timely diagnosis matters.",
        ],
      },
      {
        heading: "Signs of appendicitis — when to seek emergency care",
        paragraphs: [
          "Classic symptoms include pain that starts near the navel and moves to the lower right abdomen, loss of appetite, nausea, low-grade fever, and pain that worsens with movement or coughing. Not every case follows this exact pattern, which is why sudden or worsening abdominal pain should always be assessed promptly rather than waited out at home.",
        ],
      },
      {
        heading: "Emergency and trauma surgery beyond appendicitis",
        paragraphs: [
          "Appendicitis is only one cause of an acute abdomen. Bowel obstruction, perforation, and abdominal trauma can all require urgent surgical judgement under pressure. Dr. Lund's training includes Level I trauma care in the USA and military surgical training with the Swedish Armed Forces, experience built specifically around staying calm and precise when decisions need to be made quickly.",
        ],
      },
      {
        heading: "What to expect during the procedure",
        paragraphs: [
          "Most appendectomies today are performed laparoscopically through a few small incisions, usually taking under an hour. In more advanced cases, such as a ruptured appendix, the approach may need to be more extensive, which is explained clearly as soon as it becomes relevant.",
        ],
      },
      {
        heading: "Recovery after emergency abdominal surgery",
        paragraphs: [
          "Recovery from a straightforward laparoscopic appendectomy is usually quick: most patients go home within a day or two and return to normal activity within one to two weeks. Recovery from more complex emergency surgery varies and is discussed individually.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, with Level I trauma training and military surgical experience alongside his general surgery practice at American Hospital Dubai, Dubai Science Park. That combination means emergency abdominal cases are met with the same calm, precise approach as routine, planned surgery.",
        ],
      },
    ],
    faqs: [
      {
        q: "How urgent is appendicitis surgery?",
        a: "Appendicitis is generally treated as urgent. Prompt diagnosis and surgery reduce the risk of the appendix rupturing, which is why sudden lower right abdominal pain should be assessed quickly rather than monitored at home.",
      },
      {
        q: "Can appendicitis be treated without surgery?",
        a: "In some early, uncomplicated cases, antibiotics alone are used, but surgical removal remains the standard and most reliable treatment, particularly where there is any sign of rupture or complication.",
      },
      {
        q: "How long is recovery after an appendectomy?",
        a: "Most patients go home within a day or two after a straightforward laparoscopic appendectomy and return to normal activity within one to two weeks.",
      },
      {
        q: "What other conditions count as an abdominal emergency?",
        a: "Bowel obstruction, a perforated organ, abdominal trauma, and severe, worsening abdominal pain of any cause can all represent a surgical emergency and warrant immediate medical attention.",
      },
    ],
  },
  {
    slug: "stomach-bowel-conditions",
    tag: "Stomach & Bowel",
    homeId: "gi",
    title: "Stomach & Bowel Conditions in Dubai | Dr. Meisam Lund",
    h1: "Stomach & Bowel Conditions in Dubai",
    metaDescription:
      "Diagnosis and surgical treatment of reflux, ulcers and bowel conditions in Dubai with Dr. Meisam Lund, Consultant General Surgeon at American Hospital Dubai.",
    procedureName: "Diagnosis and Surgical Treatment of Stomach and Bowel Conditions",
    bodyLocation: "Stomach and intestines",
    quickAnswer:
      "Persistent reflux, stomach ulcers and bowel symptoms are investigated carefully before any treatment is recommended. Many conditions improve with the right diagnosis and non-surgical care; when surgery does help, it is planned precisely around a confirmed diagnosis rather than guesswork.",
    sections: [
      {
        heading: "Common stomach & bowel conditions",
        paragraphs: [
          "This covers a wide range of issues, from persistent acid reflux and stomach ulcers to chronic bowel symptoms such as ongoing pain, bloating, or a change in bowel habit. Some of these are managed entirely with medication and lifestyle changes; others benefit from surgical treatment once properly diagnosed.",
        ],
      },
      {
        heading: "When symptoms need investigation",
        paragraphs: [
          "Reflux or stomach pain that doesn't settle with standard treatment, unexplained weight loss, blood in the stool, or a persistent change in bowel habit are all reasons to investigate further rather than continue managing symptoms alone. These can have straightforward explanations, but ruling out anything more serious starts with a proper assessment.",
        ],
      },
      {
        heading: "Diagnosis comes before treatment",
        paragraphs: [
          "Getting an accurate diagnosis, often with the help of endoscopy or imaging, is the starting point for every case. Recommending surgery without a clear diagnosis is not something Dr. Lund does; the goal is to understand exactly what is happening before deciding what, if anything, needs to change.",
        ],
      },
      {
        heading: "When surgery helps",
        paragraphs: [
          "Once a diagnosis is confirmed, surgery is one option among several, recommended only where it offers a clear benefit over continued medical management. Where it is the right path, Dr. Lund favours minimally invasive techniques wherever the condition allows.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, practising at American Hospital Dubai, Dubai Science Park, with an approach built around careful diagnosis first and surgery only when it is genuinely the best option.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do all stomach problems need surgery?",
        a: "No. Many stomach and bowel conditions are managed with medication and lifestyle changes. Surgery is considered only where it clearly offers more benefit than continued non-surgical treatment.",
      },
      {
        q: "What tests are used to diagnose bowel conditions?",
        a: "Endoscopy, imaging and blood tests are the most common starting points, chosen based on the specific symptoms involved.",
      },
      {
        q: "When should I see a surgeon about reflux or stomach pain?",
        a: "If symptoms persist despite standard treatment, or are accompanied by weight loss, blood in the stool, or difficulty swallowing, it's worth a surgical consultation rather than continuing to self-manage.",
      },
      {
        q: "Is bowel surgery always major surgery?",
        a: "Not necessarily — many bowel procedures today are done laparoscopically, which generally means a shorter stay and faster recovery than traditional open surgery.",
      },
    ],
  },
  {
    slug: "colon-small-bowel-surgery",
    tag: "Colon & Small Bowel",
    title: "Colon & Small Bowel Surgery in Dubai | Dr. Meisam Lund",
    h1: "Colon & Small Bowel Surgery in Dubai",
    metaDescription:
      "Colon and small bowel surgery in Dubai with Dr. Meisam Lund, Consultant General Surgeon at American Hospital Dubai, using minimally invasive technique where possible.",
    procedureName: "Colon and Small Bowel Surgery",
    bodyLocation: "Colon and small intestine",
    quickAnswer:
      "Colon and small bowel surgery covers conditions such as diverticulitis, bowel obstruction, and benign or suspicious growths that need surgical removal. Many cases today are suitable for laparoscopic surgery, which generally means a shorter hospital stay and faster recovery than traditional open surgery.",
    sections: [
      {
        heading: "Conditions treated",
        paragraphs: [
          "This includes diverticulitis (inflammation of small pouches in the colon wall), bowel obstruction, benign polyps or growths that need removal, and other structural problems of the colon or small intestine identified through investigation or imaging.",
        ],
      },
      {
        heading: "Diagnosis and planning",
        paragraphs: [
          "As with any bowel condition, the starting point is a clear diagnosis, usually through colonoscopy, imaging, or both. Surgical planning, including exactly how much of the bowel needs to be involved, follows directly from these findings rather than being decided in advance.",
        ],
      },
      {
        heading: "Minimally invasive technique where possible",
        paragraphs: [
          "Many colon and small bowel procedures can now be performed laparoscopically, through several small incisions rather than one large one. This generally means less post-operative pain, a shorter hospital stay, and a faster return to normal activity, though the right approach depends on the specific condition and its complexity.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, practising at American Hospital Dubai, Dubai Science Park, with a preference for minimally invasive technique wherever the condition safely allows it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is colon surgery always done as open surgery?",
        a: "No — many colon and small bowel procedures are now done laparoscopically, which generally means less pain and a faster recovery than open surgery, depending on the specific condition.",
      },
      {
        q: "What is diverticulitis?",
        a: "Diverticulitis is inflammation or infection of small pouches that can form in the colon wall. Mild cases are often treated with antibiotics; recurring or complicated cases may need surgery.",
      },
      {
        q: "How long is recovery after bowel surgery?",
        a: "Recovery varies with the extent of surgery, but laparoscopic cases generally allow a return to light activity within one to two weeks and full recovery within four to six weeks.",
      },
    ],
  },
  {
    slug: "endoscopy",
    tag: "Endoscopy",
    homeId: "endoscopy",
    title: "Diagnostic & Therapeutic Endoscopy in Dubai | Dr. Meisam Lund",
    h1: "Diagnostic & Therapeutic Endoscopy in Dubai",
    metaDescription:
      "Diagnostic and therapeutic endoscopy in Dubai with Dr. Meisam Lund, Consultant General Surgeon at American Hospital Dubai, for accurate diagnosis without surgery.",
    procedureName: "Diagnostic and Therapeutic Endoscopy",
    bodyLocation: "Upper and lower gastrointestinal tract",
    quickAnswer:
      "Endoscopy uses a thin, flexible camera to examine the stomach, bowel or oesophagus directly, allowing many conditions to be diagnosed, and in some cases treated, without any surgical incision at all. Most procedures are day cases with a short recovery.",
    sections: [
      {
        heading: "What is endoscopy?",
        paragraphs: [
          "Endoscopy involves passing a thin, flexible camera through the mouth (upper endoscopy/gastroscopy) or through the back passage (colonoscopy) to examine the digestive tract directly. It is one of the most effective ways to investigate symptoms like reflux, stomach pain, or changes in bowel habit, and can often treat what it finds in the same session.",
        ],
      },
      {
        heading: "When endoscopy is recommended",
        paragraphs: [
          "Persistent reflux or heartburn, difficulty swallowing, unexplained abdominal pain, blood in the stool, or a family history that warrants screening are all common reasons for endoscopy. It is also used to follow up on previous findings, such as polyps, to make sure nothing has changed.",
        ],
      },
      {
        heading: "Diagnostic and therapeutic uses",
        paragraphs: [
          "Beyond diagnosis, endoscopy can often treat what it finds in the same procedure, removing polyps, taking biopsies, or controlling minor bleeding, without the need for a separate surgical operation.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Most endoscopic procedures are day cases performed under sedation, typically taking between 15 and 45 minutes depending on what is involved. Most patients go home the same day and return to normal activity within 24 hours.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, practising at American Hospital Dubai, Dubai Science Park, and uses endoscopy as a central tool for giving patients a clear, confident answer about what is actually happening before any further decision is made.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is endoscopy painful?",
        a: "Endoscopy is performed under sedation, so most patients feel little to nothing during the procedure itself, with only mild throat discomfort or bloating afterward in some cases.",
      },
      {
        q: "How long does an endoscopy take?",
        a: "Most procedures take between 15 and 45 minutes, depending on what is being examined or treated, with most patients home the same day.",
      },
      {
        q: "What is the difference between a gastroscopy and a colonoscopy?",
        a: "A gastroscopy examines the oesophagus, stomach and top of the small intestine via the mouth; a colonoscopy examines the large intestine via the back passage. Both use the same type of flexible camera.",
      },
    ],
  },
  {
    slug: "second-opinion-surgical-decisions",
    tag: "Second Opinion",
    title: "Second Opinions for Surgical Decisions in Dubai | Dr. Meisam Lund",
    h1: "Second Opinions for Surgical Decisions in Dubai",
    metaDescription:
      "Get an honest second opinion on a recommended surgery in Dubai from Dr. Meisam Lund, Consultant General Surgeon at American Hospital Dubai.",
    procedureName: "Surgical Second Opinion Consultation",
    bodyLocation: "General and gastrointestinal surgery",
    quickAnswer:
      "A surgical second opinion is a careful, independent review of your case, scans and history by another qualified surgeon, specifically to confirm whether the recommended operation is the right one, a different approach would be better, or surgery may not be needed at all.",
    sections: [
      {
        heading: "Why patients seek a second opinion",
        paragraphs: [
          "Being told you need surgery, especially for the first time, is a significant decision, and it's entirely reasonable to want confirmation before going ahead. A second opinion is not about distrust of the first surgeon; it's about making sure the decision is the right one for you specifically.",
        ],
      },
      {
        heading: "What a second opinion involves",
        paragraphs: [
          "Dr. Lund reviews the available scans, test results and surgical history, and discusses the case directly with the patient, reaching an independent view on whether the recommended surgery is appropriate, whether an alternative technique or approach may be better, or whether surgery may not be necessary at all.",
        ],
      },
      {
        heading: "An honest answer either way",
        paragraphs: [
          "A second opinion sometimes confirms the original recommendation, and sometimes it doesn't. Either outcome is given honestly, since the purpose of a second opinion is clarity and confidence in the decision, not simply agreement.",
        ],
      },
      {
        heading: "Why choose Dr. Meisam Lund",
        paragraphs: [
          "Dr. Lund is a Swedish Board-Certified Consultant General Surgeon, board-certified since 2013, practising at American Hospital Dubai, Dubai Science Park, with a standing philosophy that surgery should only be recommended when it offers genuine benefit, the same principle he applies when reviewing another surgeon's recommendation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it rude to ask for a second opinion before surgery?",
        a: "No — seeking a second opinion before a significant operation is a normal, reasonable step, and any good surgeon understands and respects that choice.",
      },
      {
        q: "What should I bring to a second opinion consultation?",
        a: "Any scans, test results, and a summary or letter from the surgeon who made the original recommendation help the review be as thorough and accurate as possible.",
      },
      {
        q: "Will a second opinion always disagree with the first surgeon?",
        a: "No. A second opinion is an independent review, and it sometimes confirms the original recommendation and sometimes suggests a different path — the goal is an honest, confident answer either way.",
      },
    ],
  },
];

export function getConditionBySlug(slug) {
  return conditionPages.find((c) => c.slug === slug);
}

// Was `.filter(c => c.slug !== slug).slice(0, count)` — always the first
// `count` entries of the array in fixed order. Since the two LAST entries
// (colon-small-bowel-surgery, second-opinion-surgical-decisions) were never
// within the first 3 of anyone else's filtered list, no other condition page
// ever linked to them — the only inbound links either had were from each
// other, and neither had any inbound link from a page a crawler could reach
// another way, so Semrush flagged them as orphaned along with the rest of
// this cluster. Rotating the start point by each page's own index instead
// means every page appears in the "next `count`" of whichever pages precede
// it, so the full set round-robins and nothing is left permanently unlinked.
export function getOtherConditions(slug, count = 3) {
  const idx = conditionPages.findIndex((c) => c.slug === slug);
  if (idx === -1) return conditionPages.slice(0, count);
  const rotated = [...conditionPages.slice(idx + 1), ...conditionPages.slice(0, idx)];
  return rotated.slice(0, count);
}
