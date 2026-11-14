// Real content for the practice blog (previously the homepage's "Articles" cards
// led nowhere). Each entry here becomes a real, indexable page at /blog/[slug].
//
// Written for two audiences at once, which is the whole point of GEO
// (Generative-Engine Optimization) alongside classic SEO:
//   1. Human patients scanning for a plain answer to a worry they have right now.
//   2. AI answer engines (Google AI Overviews, ChatGPT, Perplexity, etc.) that
//      lift a short, self-contained "quickAnswer" plus the FAQ items almost
//      verbatim when they cite a source. Giving them a clean, quotable answer
//      up front, in plain language, is what earns the citation.
//
// English only for v1, matching the language the great majority of these
// medical search queries are actually typed in. Translating this safely into
// Arabic/Swedish is a separate, larger job (medical translation needs care) and
// can be added later post by post if it proves worthwhile.
//
// Content rules carried over from the rest of the site (do not relax these when
// adding future posts):
//   - Dr. Meisam practices at American Hospital Dubai, not independently. Never
//     imply he can be booked or seen outside the hospital.
//   - No claims about consultations in Arabic.
//   - No bariatric/weight-loss marketing push, his focus here is general/
//     laparoscopic/GI surgery.
//   - No promises about insurance coverage, only that the hospital team checks it.
//   - No promised turnaround time for second opinions or appointments.
//   - No invented patient quotes, reviews or statistics.
//   - Educational only, always makes clear this isn't a diagnosis.
//
// Photo notes: every photo is a free Unsplash image chosen to read as warm,
// human and non-clinical, and to match the practice's actual patient
// population (Dubai: western expats, Arab/Mediterranean, Gulf Arab and South
// Asian patients) rather than a generic/stock "anywhere" look. `imagePosition`
// is an optional CSS object-position value — used when a photo needs to be
// cropped toward one part of the frame (e.g. a two-person photo cropped down
// to just one person) rather than centered.

export const blogPosts = [
  {
    slug: "do-i-really-need-surgery",
    tag: "Decisions",
    title: "Do I Really Need Surgery? How to Think It Through",
    metaDescription:
      "A surgeon's honest guide to deciding whether an operation is really the right next step, what questions to ask, and when it's reasonable to wait or seek a second opinion.",
    excerpt: "When surgery helps, and when other options may be better for you.",
    readTime: "6 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1758691462071-757bca955439?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A doctor warmly comforting a patient with a reassuring hand on the arm",
    quickAnswer:
      "Surgery is usually the right choice when it removes a clear, ongoing source of pain, danger or risk that other treatments can't fix, and when that benefit outweighs the risks of the operation itself. If your situation isn't an emergency, it's reasonable to ask about non-surgical options first and to get a second opinion before agreeing to anything.",
    sections: [
      {
        heading: "What actually makes an operation necessary?",
        paragraphs: [
          "Patients often assume that once a condition has a name, surgery must follow. In reality, a good surgeon is looking for something more specific: is there a problem here that surgery can fix better, more safely, or more completely than anything else, and does the benefit of fixing it outweigh the risk and recovery of an operation?",
          "That calculation looks different for every condition and every patient. A hernia causing daily pain and getting larger is a very different conversation from one that is small, painless and stable. Gallstones causing repeated attacks are different from gallstones found by accident on a scan that has never caused a symptom. The condition's name matters less than how it is actually behaving in your body, right now.",
        ],
      },
      {
        heading: "When is it reasonable to wait or try other options first?",
        paragraphs: [
          "Plenty of conditions I see are safe to monitor, or can be managed with medication, lifestyle changes, or simple observation over time. If a problem isn't causing you real symptoms and isn't at meaningful risk of becoming an emergency, there is usually no rush to operate, and waiting to see how things develop is often the sensible choice.",
          "The exception is anything with warning signs of an emergency, such as sudden severe pain, fever, or signs of a blockage or infection. Those situations need prompt assessment, not a wait-and-see approach.",
        ],
      },
      {
        heading: "What should I ask before agreeing to surgery?",
        paragraphs: [
          "A few questions tend to cut through most of the uncertainty: What specifically will this operation fix that isn't getting better on its own? What happens if I don't have it? What are the realistic risks, and how common are they? Is there a less invasive option? And how experienced is the surgical team with this particular procedure?",
          "You are entitled to clear, direct answers to all of these before you decide, and a good surgeon will want you to ask them.",
        ],
      },
      {
        heading: "How Dr. Meisam approaches this conversation with patients",
        paragraphs: [
          "Dr. Meisam's starting position with every patient is that surgery is a tool, not a default. Many of the people he sees leave the first consultation without a surgery date, because their condition simply doesn't need one yet, or at all. When an operation genuinely is the better path, he explains exactly why in plain language, what the realistic alternatives are, and what to expect at each stage, so the decision is yours to make with full information rather than something that happens to you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it normal to feel unsure about whether to have surgery?",
        a: "Yes, this is one of the most common feelings patients bring to a consultation. A clear explanation of what the operation would and wouldn't change usually helps far more than being told simply to trust the process.",
      },
      {
        q: "Can I get a second opinion before deciding?",
        a: "Yes, and it's a completely normal, sensible step for any non-emergency decision. See our full guide on the value of a second opinion for how to approach it.",
      },
      {
        q: "What if my condition isn't an emergency?",
        a: "If there are no red-flag symptoms, there is usually time to have an unhurried conversation about your options, ask questions, and decide at your own pace rather than under pressure.",
      },
    ],
  },
  {
    slug: "gallstones-explained",
    tag: "Gallbladder",
    // Was "Gallstones Explained: Symptoms, Causes and Treatment Options" — at
    // 78 characters plus the " | Dr. Meisam Lund" template suffix it rendered
    // an 80-character <title>, which Semrush (and Google, which truncates
    // around ~60-70 characters) flagged as too long. This keeps the same
    // three keywords in a shorter frame.
    title: "Gallstones: Symptoms, Causes and Treatment",
    metaDescription:
      "What gallstones actually are, the symptoms that suggest your gallbladder is the cause, and when keyhole gallbladder removal is and isn't the right treatment.",
    excerpt: "Symptoms, causes and the treatment options worth knowing about.",
    readTime: "7 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A close-up of hands chopping fresh herbs on a wooden board",
    quickAnswer:
      "Gallstones are small, hardened deposits that form inside the gallbladder, usually made of cholesterol. Many people have them without ever knowing, but if they cause repeated pain, especially after fatty meals, or lead to infection or inflammation, keyhole removal of the gallbladder is usually the most reliable long-term treatment.",
    sections: [
      {
        heading: "What are gallstones, and why do they form?",
        paragraphs: [
          "The gallbladder is a small organ that stores bile, a fluid made by the liver to help digest fat. Gallstones form when substances in bile, most often cholesterol, become concentrated and harden into small stones. They can be as tiny as a grain of sand or as large as a golf ball, and a person can have one or many.",
          "Gallstones are extremely common, and a large number of people who have them never develop any symptoms at all. In that case, they usually don't need treatment, just awareness.",
        ],
      },
      {
        heading: "What symptoms suggest your gallbladder is the problem?",
        paragraphs: [
          "The classic symptom is pain in the upper right or central abdomen, often after a fatty or heavy meal, that can spread to the back or right shoulder blade. Attacks can last from thirty minutes to several hours. Nausea, bloating and discomfort after eating fatty foods are also common.",
          "If pain is accompanied by fever, yellowing of the skin or eyes, or persistent vomiting, this suggests a more serious complication such as infection or a blocked bile duct, and needs urgent medical attention rather than a routine appointment.",
        ],
      },
      {
        heading: "Do all gallstones need to be removed?",
        paragraphs: [
          "No. Gallstones that are causing no symptoms are usually left alone and simply monitored, since the risks of surgery for a silent stone generally outweigh the benefit. The conversation changes once stones start causing repeated pain, inflammation of the gallbladder (cholecystitis), or complications like a stone moving into the bile duct.",
          "Once symptoms are established and clearly linked to the gallbladder, they tend to keep recurring, so removing the gallbladder is usually recommended rather than trying to manage attacks indefinitely.",
        ],
      },
      {
        heading: "What does keyhole gallbladder removal actually involve?",
        paragraphs: [
          "Laparoscopic cholecystectomy, removing the gallbladder through a few small keyhole incisions using a camera and fine instruments, is one of the most common and well-established operations in general surgery. Most patients go home the same day or the day after, and the gallbladder itself is not essential for life, the liver simply sends bile directly to the digestive system afterward.",
          "Recovery is generally quick. For more detail on what the first days and weeks look like, see our guide to recovery after keyhole surgery.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are gallstones dangerous if left untreated?",
        a: "Silent gallstones with no symptoms are usually low risk. Once they start causing pain or complications, leaving them untreated raises the risk of infection, a blocked bile duct, or inflammation of the pancreas, so it's worth having them properly assessed.",
      },
      {
        q: "Can diet or medication dissolve gallstones?",
        a: "There are rarely-used oral medications that can dissolve certain small cholesterol stones very slowly over months to years, but they are not effective for most patients and stones commonly return once treatment stops. Diet cannot dissolve existing stones, though it can help reduce the chance of new ones forming.",
      },
      {
        q: "Will I need to change my diet after gallbladder removal?",
        a: "Most people return to a normal diet within a few weeks. Some notice they are more sensitive to very fatty or heavy meals afterward, and it usually helps to reintroduce food gradually in the first couple of weeks.",
      },
    ],
  },
  {
    slug: "hernia-myths",
    tag: "Hernia",
    title: "Hernia Myths: What's True and What Isn't",
    metaDescription:
      "Common myths about hernias, from 'it will go away on its own' to 'it only happens from heavy lifting', and the facts patients should actually know.",
    excerpt: "Common myths about hernias and the facts you should actually know.",
    readTime: "6 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1641337221253-fdc7237f6b61?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A man doing a dumbbell curl in a well-lit gym",
    quickAnswer:
      "A hernia will not heal or go away on its own, and it can only be corrected with surgery. However, not every hernia needs to be repaired immediately, a small one causing no symptoms can often be safely monitored, while a painful or enlarging one usually should be addressed before it causes complications.",
    sections: [
      {
        heading: "Myth: a hernia will go away on its own",
        paragraphs: [
          "This is the most common misunderstanding. A hernia is a physical gap or weakness in the muscle or tissue wall that allows part of an organ, most often part of the intestine, to push through. No amount of rest, exercise or time closes that gap by itself, only surgical repair can. What can genuinely change over time is whether it's causing symptoms and whether it needs to be fixed now or can be watched.",
        ],
      },
      {
        heading: "Myth: hernias only happen from heavy lifting",
        paragraphs: [
          "Heavy lifting can trigger or worsen a hernia in someone already prone to one, but it's rarely the sole cause. Hernias develop from a combination of factors including a naturally weaker point in the abdominal wall, prior surgery in the area, persistent coughing, straining, pregnancy, or simply age-related loss of tissue strength. Many patients who develop a hernia can't point to a single lifting incident at all.",
        ],
      },
      {
        heading: "Myth: every hernia needs emergency surgery",
        paragraphs: [
          "Most hernias are not emergencies. A hernia becomes urgent when it becomes 'incarcerated' (stuck and can't be pushed back in) or 'strangulated' (its blood supply is cut off), which causes sudden severe pain, redness, and often nausea or vomiting, and does need immediate care. Outside of that, many hernias, especially small, painless ones, can be scheduled for repair at a sensible time rather than rushed into.",
        ],
      },
      {
        heading: "Myth: hernia surgery means a long, difficult recovery",
        paragraphs: [
          "Modern hernia repair, particularly keyhole (laparoscopic) technique, is generally well tolerated with most patients back to light activity within days and normal activity within a few weeks, depending on the hernia's size and location and the type of repair used. The right approach depends on your specific hernia, which is why an individual assessment matters more than a generic timeline.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a hernia get worse if I ignore it?",
        a: "Yes, hernias typically enlarge gradually over time and can eventually become harder to repair or, in some cases, develop into an emergency. A small, symptom-free hernia can often be safely monitored, but it should be checked periodically rather than simply ignored.",
      },
      {
        q: "Is keyhole hernia repair as durable as open surgery?",
        a: "For most hernia types, keyhole repair with mesh has recurrence rates comparable to open repair, with the added benefit of typically less pain and a faster return to normal activity. The best technique depends on the specific hernia, which is why it's assessed individually rather than applying one method to everyone.",
      },
      {
        q: "Can women get hernias too?",
        a: "Yes. Hernias are more common in men overall, but women can and do develop them, including hernias linked to pregnancy or prior abdominal surgery, and they should be taken just as seriously.",
      },
    ],
  },
  {
    slug: "when-abdominal-pain-becomes-serious",
    tag: "Warning signs",
    title: "When Abdominal Pain Becomes Serious: Red Flags to Know",
    metaDescription:
      "How to tell ordinary abdominal discomfort apart from the red-flag symptoms that mean you should seek urgent medical care.",
    excerpt: "The red flags you should never ignore, and when to seek care.",
    readTime: "6 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1577989231124-fea5077a859b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A man in a white t-shirt sitting and looking down, hand resting near his midsection, soft natural light",
    quickAnswer:
      "Most abdominal pain is minor and settles on its own. Seek urgent medical care if pain is sudden and severe, keeps getting worse, is accompanied by fever, persistent vomiting, blood in vomit or stool, a rigid or very tender abdomen, or fainting, these can point to conditions such as appendicitis, a blocked bowel, or a bleeding or infected organ that need prompt assessment.",
    sections: [
      {
        heading: "Ordinary discomfort versus a red flag",
        paragraphs: [
          "Cramping, bloating, or mild pain that comes and goes, especially around eating or bowel movements, is usually not dangerous and often settles within a day or two. What changes the picture is pain that is severe, constant, rapidly worsening, or paired with other symptoms that suggest something more serious is happening inside the abdomen.",
        ],
      },
      {
        heading: "The warning signs that need urgent attention",
        paragraphs: [
          "Go to an emergency department, rather than waiting for a routine appointment, if you have sudden, severe abdominal pain, pain plus a fever, an abdomen that feels rigid or unusually tender to touch, persistent vomiting that won't stop, vomiting blood or something resembling coffee grounds, black or bloody stools, fainting or feeling faint, or pain that is rapidly getting worse rather than better.",
          "Pain that starts vaguely around the belly button and later settles and sharpens in the lower right abdomen is a classic pattern for appendicitis and deserves same-day assessment even without other symptoms yet.",
        ],
      },
      {
        heading: "Common causes of sudden, severe abdominal pain",
        paragraphs: [
          "Among the more common surgical causes are appendicitis, a gallbladder attack or infection, a strangulated hernia, a perforated ulcer, and bowel obstruction. Each has a different pattern of pain and other symptoms, which is exactly why a hands-on examination and, often, imaging or blood tests are needed to tell them apart safely rather than guessing from symptoms alone.",
        ],
      },
      {
        heading: "What happens if you go to the emergency room",
        paragraphs: [
          "Expect a physical examination, blood tests, and usually an ultrasound or CT scan to identify the cause. Many causes of severe abdominal pain are very treatable once correctly diagnosed, the key is not delaying that diagnosis when the warning signs above are present.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I go to the emergency room or book a regular appointment?",
        a: "If you have any of the red-flag symptoms above, sudden severe pain, fever, persistent vomiting, a rigid abdomen, or bleeding, go to an emergency department rather than waiting for a scheduled consultation. For pain that is milder, stable and without those features, a regular appointment is usually appropriate.",
      },
      {
        q: "Can appendicitis be mistaken for something less serious?",
        a: "Yes, early appendicitis can feel like general stomach upset before it localizes to the lower right abdomen, which is why worsening or shifting pain deserves prompt evaluation rather than being assumed to be indigestion.",
      },
      {
        q: "Is it normal for abdominal pain to move location?",
        a: "It can be a meaningful clue rather than something to dismiss. Pain that starts centrally and moves and sharpens to one side, for example, is a recognized pattern for specific conditions and is worth mentioning clearly to whoever examines you.",
      },
    ],
  },
  {
    slug: "recovery-after-keyhole-surgery",
    tag: "Recovery",
    title: "Recovery After Keyhole Surgery: What to Expect",
    metaDescription:
      "A practical, day-by-day guide to what recovery after laparoscopic (keyhole) surgery typically looks like, and simple tips for a calmer, faster recovery.",
    excerpt: "What to expect and simple tips for a faster, calmer recovery.",
    readTime: "7 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1758344953704-1e836a1ff42a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A woman smiling while running through a sunlit grassy field",
    quickAnswer:
      "Recovery after keyhole (laparoscopic) surgery is generally faster and less painful than after open surgery, because the incisions are much smaller. Most patients manage with simple pain relief, are walking the same day, and return to light daily activities within a week or two, though the exact timeline depends on which operation was performed.",
    sections: [
      {
        heading: "Why keyhole surgery usually means an easier recovery",
        paragraphs: [
          "Laparoscopic surgery uses a small camera and instruments through a few incisions typically under a centimetre or two, instead of one large incision. Smaller wounds generally mean less pain, a lower risk of wound infection, less scarring, and a faster return to normal movement, though every operation and every patient recovers at their own pace.",
        ],
      },
      {
        heading: "The first 48 hours",
        paragraphs: [
          "It's common to feel some soreness at the incision sites, mild bloating from the gas used during surgery, and general tiredness. Getting up and walking short distances as soon as you comfortably can, usually the same day or the next morning, actually helps recovery by reducing bloating and the risk of complications like blood clots.",
          "Some patients notice pain in the shoulder tip in the first day or two. This is a normal, temporary effect of the gas used to create space during the operation, not a sign of anything wrong with the shoulder itself, and it settles on its own.",
        ],
      },
      {
        heading: "The first two weeks",
        paragraphs: [
          "Most people can manage light daily activities, showering, short walks, light chores, within a few days, while avoiding heavy lifting or strenuous exercise until cleared. Energy levels typically improve steadily each day. Keep the incision sites clean and dry as instructed, and watch for the warning signs below.",
        ],
      },
      {
        heading: "Getting back to work, exercise and normal life",
        paragraphs: [
          "Return-to-work timing depends heavily on both the operation and the nature of your job, desk-based work is often possible within a week or two for many procedures, while physically demanding work needs longer. Return to full exercise, including heavier lifting, is usually gradual over three to six weeks. Your surgical team will give you a timeline specific to your operation rather than a one-size-fits-all number.",
        ],
      },
      {
        heading: "Warning signs during recovery that need attention",
        paragraphs: [
          "Contact your surgical team promptly if you develop a fever, increasing redness, swelling or discharge from an incision, worsening rather than improving pain, or any symptom that feels like it's going the wrong direction rather than settling. Most recoveries are straightforward, but it's always better to check early than to wait.",
        ],
      },
    ],
    faqs: [
      {
        q: "How soon can I drive after keyhole surgery?",
        a: "Generally once you can comfortably wear a seatbelt, perform an emergency stop without hesitation, and are no longer taking strong pain medication that would impair driving, often around a week for many procedures, but this should be confirmed with your surgical team for your specific operation.",
      },
      {
        q: "When can I go back to the gym?",
        a: "Light activity like walking can usually resume within days, but structured exercise and any heavy lifting are typically paused for several weeks to let internal healing catch up with how you feel on the outside. Your team will advise a timeline based on your specific procedure.",
      },
      {
        q: "Is shoulder pain after laparoscopic surgery normal?",
        a: "Yes, it's a well-recognized, temporary effect of the gas used during keyhole surgery irritating a nerve near the diaphragm, and it typically resolves within a few days on its own.",
      },
    ],
  },
  {
    slug: "value-of-a-second-opinion",
    tag: "Second opinion",
    title: "The Value of a Second Opinion Before Surgery",
    metaDescription:
      "Why seeking a second opinion before a major surgical decision is a normal, sensible step, when it matters most, and how to make the most of one.",
    excerpt: "Getting clarity and confidence before an important decision.",
    readTime: "5 min read",
    publishedDate: "2026-09-16",
    image: "https://images.unsplash.com/photo-1631217868902-fa06818573b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A doctor in warm conversation with a patient in a consultation room, cropped to focus on the doctor",
    imagePosition: "65% 28%",
    quickAnswer:
      "Seeking a second opinion before a significant surgical decision is a normal and sensible step, not a lack of trust in your first doctor. It's especially worth doing when the diagnosis is uncertain, when surgery is major or irreversible, or when you simply want to feel fully confident before proceeding.",
    sections: [
      {
        heading: "Why a second opinion is a normal step, not a slight",
        paragraphs: [
          "Any experienced surgeon expects that patients facing a significant decision may want another qualified view. It doesn't mean the first opinion was wrong, surgery involves judgment calls, and hearing the reasoning from a second, independent surgeon either reinforces confidence in the original plan or surfaces a genuinely different option worth considering. Either outcome is useful.",
        ],
      },
      {
        heading: "When a second opinion matters most",
        paragraphs: [
          "It's particularly worth pursuing when the diagnosis itself is unclear or in dispute, when the recommended surgery is major, high-risk or irreversible, when there appear to be multiple reasonable treatment paths, or when something about the first conversation left you uncertain rather than reassured. For smaller, lower-risk, well-established procedures, it matters less, though you're always entitled to ask.",
        ],
      },
      {
        heading: "What to bring to a second-opinion consultation",
        paragraphs: [
          "Bring copies of your imaging (scans on disc or accessible digitally), lab results, any written reports from your first surgeon, and a clear note of what was recommended and why. This lets the second surgeon review the same information rather than starting from scratch, which usually leads to a more useful conversation.",
        ],
      },
      {
        heading: "How a second opinion can change, or confirm, your plan",
        paragraphs: [
          "Sometimes a second opinion confirms the original plan exactly, which is itself valuable, it means you can move forward with genuine confidence rather than lingering doubt. Other times it identifies a different surgical approach, a non-surgical alternative worth trying first, or additional information that changes the picture. Either way, you make your final decision with a fuller understanding of your options.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will seeking a second opinion delay my treatment?",
        a: "For genuine emergencies, treatment shouldn't be delayed to seek one. For planned, non-urgent decisions, arranging a second opinion consultation is a normal part of the process and worth doing before committing to a major or irreversible operation.",
      },
      {
        q: "Do I need a referral to get a second opinion?",
        a: "This depends on your insurance and healthcare system. It's worth checking with your insurer or the hospital's patient services team what's needed for your specific plan before booking.",
      },
      {
        q: "Will my original doctor be upset if I seek a second opinion?",
        a: "A professional, experienced doctor understands that major decisions deserve confidence and won't take a second opinion personally. It's a routine, accepted part of good medical care.",
      },
    ],
  },
  // --- Added Nov 2026 as part of the SEO/GEO content audit. Both posts
  // below are DRAFT content: written to match the site's existing tone,
  // rules and medical caution (see the content-rules comment at the top of
  // this file), but not yet reviewed by Dr. Lund. Do not treat as published
  // until he's signed off on the medical framing.
  //
  // Deliberately NOT added to content.js's `articles.items` (the homepage
  // "Resources" teaser cards) — that list is English-only and position-
  // matched 1:1 against this array by index (see Articles.js), and
  // extending it would mean writing matching Arabic/Swedish teaser copy,
  // which this file's own header comment already flags as a separate,
  // careful job. These two posts are still fully real pages: listed on
  // /blog, in the sitemap, and internally linked from the condition pages
  // and from each other.
  {
    slug: "gallbladder-hernia-appendicitis-differences",
    tag: "Symptoms",
    title: "Gallbladder Pain, Hernia, or Appendicitis? How to Tell Abdominal Symptoms Apart",
    metaDescription:
      "How to tell gallbladder pain, a hernia and appendicitis apart by where and how they typically present, from a Consultant General Surgeon in Dubai.",
    excerpt: "Three common causes of abdominal pain, and how their patterns usually differ.",
    readTime: "6 min read",
    publishedDate: "2026-11-14",
    image: "https://images.unsplash.com/photo-1758691462071-757bca955439?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A doctor warmly talking through a patient's symptoms with a reassuring hand on the arm",
    quickAnswer:
      "Gallbladder pain is usually felt in the upper right abdomen, often after a fatty meal. A hernia shows as a visible or palpable bulge, most often in the groin, navel or a previous scar. Appendicitis classically starts as vague pain near the navel that moves and sharpens to the lower right abdomen. These patterns are a useful starting point, not a diagnosis — all three need an in-person examination to confirm.",
    sections: [
      {
        heading: "Why these three get confused",
        paragraphs: [
          "Gallbladder disease, hernias and appendicitis are three of the most common reasons patients end up discussing abdominal pain with a general surgeon, and early on they can feel similar: a vague ache or discomfort somewhere in the abdomen that's hard to pin down. The good news is that each one tends to have a recognisable pattern once you know what to look for, which is the aim of this guide. It isn't a substitute for an examination, it's a way to have a more useful conversation with whoever assesses you.",
        ],
      },
      {
        heading: "Gallbladder pain: upper right, often after eating",
        paragraphs: [
          "Gallbladder pain typically sits in the upper right or central abdomen, often triggered or worsened by a fatty or heavy meal, and can spread to the back or right shoulder blade. Attacks tend to come and go, lasting thirty minutes to a few hours, with nausea or bloating alongside. For the full picture, including when it does and doesn't need surgery, see our guides on gallbladder surgery and gallstones explained.",
        ],
      },
      {
        heading: "A hernia: a bulge, not just pain",
        paragraphs: [
          "A hernia's defining feature isn't the pain itself, it's a visible or palpable bulge, most often in the groin, at the navel, or at the site of a previous surgical scar. The bulge is often more noticeable standing, coughing or straining, and may flatten when lying down. Discomfort is usually a dragging or aching sensation around the bulge itself rather than pain that migrates elsewhere. More detail is in our hernia surgery guide and hernia myths article.",
        ],
      },
      {
        heading: "Appendicitis: pain that starts vague and moves",
        paragraphs: [
          "The classic appendicitis pattern is pain that starts vaguely around the navel and, over several hours, moves and sharpens into the lower right abdomen, often with loss of appetite, nausea and a low-grade fever. Unlike gallbladder pain, it typically doesn't settle and recur, it tends to steadily worsen. Our appendicitis & emergency surgery guide covers this in full.",
        ],
      },
      {
        heading: "What these patterns can't tell you",
        paragraphs: [
          "Real symptoms don't always read from a textbook; a complicated or unusually positioned organ can mimic another condition entirely, and some patients feel very little pain even with a condition that needs prompt treatment. These patterns are a way to organise what you're noticing before you see someone, not a way to rule something out yourself.",
        ],
      },
      {
        heading: "When to stop comparing and seek care now",
        paragraphs: [
          "Sudden severe pain, a fever, persistent vomiting, a rigid or very tender abdomen, or a hernia that won't push back in are signs to seek urgent care rather than keep narrowing it down at home. Our full guide to abdominal pain red flags covers exactly which symptoms warrant an emergency department rather than a routine appointment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I tell a hernia apart from gallbladder pain myself?",
        a: "Often, yes, to a point: a hernia shows as a visible or palpable bulge, usually in the groin, navel or a scar, while gallbladder pain is felt internally in the upper right abdomen with no bulge at all. But confirming it, and ruling out anything else, still needs an in-person examination.",
      },
      {
        q: "What's the main difference between gallbladder pain and appendicitis?",
        a: "Gallbladder pain sits in the upper right abdomen and often follows a fatty meal, usually coming and going in attacks. Appendicitis classically starts vaguely near the navel and steadily moves and sharpens to the lower right abdomen over hours, without settling on its own.",
      },
      {
        q: "Should I wait and see which one it turns out to be?",
        a: "Not if symptoms are worsening, or if you notice any red-flag signs such as fever, persistent vomiting or severe pain. For milder, stable symptoms, a routine assessment is reasonable, but a surgeon examining you is always a faster, more reliable path to an answer than monitoring symptoms yourself.",
      },
    ],
  },
  {
    slug: "preparing-for-surgery-checklist",
    tag: "Preparation",
    title: "Preparing for Surgery: A Practical Pre-Op Checklist",
    metaDescription:
      "A practical checklist for the days before surgery: medications, fasting, logistics, what to bring, and the questions worth asking your surgical team first.",
    excerpt: "Medications, fasting, logistics and what to bring, before your operation.",
    readTime: "6 min read",
    publishedDate: "2026-11-14",
    image: "https://images.unsplash.com/photo-1631217868902-fa06818573b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "A doctor in warm conversation with a patient ahead of a planned procedure, cropped to focus on the doctor",
    imagePosition: "65% 28%",
    quickAnswer:
      "Preparing for surgery mainly comes down to five things: telling your surgical team about every medication and supplement you take, following their exact fasting instructions, arranging a ride home and support afterward, packing simply, and asking any remaining questions before the day itself. Your surgical team will always give you precise timings for your specific operation, this is a general outline to prepare with.",
    sections: [
      {
        heading: "Why preparation matters",
        paragraphs: [
          "Good preparation doesn't just reduce last-minute stress, it genuinely lowers the chance of a delay or complication on the day. Most of it is simple admin done a few days ahead, not anything medical you need to manage yourself.",
        ],
      },
      {
        heading: "Medications and supplements",
        paragraphs: [
          "Tell your surgical team about every medication, supplement and herbal remedy you take, including anything over-the-counter. Blood thinners, some supplements, and certain other medications often need to be paused before surgery, but exactly which ones, and for how many days, varies by drug and by procedure. Never stop or adjust a medication on your own, always confirm the exact timing with your surgical team.",
        ],
      },
      {
        heading: "Fasting before your operation",
        paragraphs: [
          "Most operations under general anaesthesia require fasting from food and drink for a set period beforehand, for safety during anaesthesia. The exact number of hours depends on the type of anaesthesia and the hospital's own protocol, so always follow the specific instructions you're given rather than a general rule, and call your team if anything is unclear.",
        ],
      },
      {
        heading: "Arranging your logistics",
        paragraphs: [
          "After anaesthesia you will not be able to drive yourself home, so arrange for someone to collect you and, depending on the procedure, to stay with you for the first night. It's worth arranging this well in advance rather than the morning of your surgery, and confirming with your workplace or family how much time off or support you'll realistically need during early recovery.",
        ],
      },
      {
        heading: "What to bring with you",
        paragraphs: [
          "Keep it simple: identification, your insurance details, a list of your current medications and dosages, loose comfortable clothing for the journey home, and any specific items your team has asked you to bring. Leave valuables at home.",
        ],
      },
      {
        heading: "Questions worth asking before the day",
        paragraphs: [
          "A short list goes a long way: exactly when should I stop eating and drinking? Which of my regular medications should I take as normal, and which should I pause? How long will I realistically need help at home afterward? What's the clearest sign something isn't going as expected during recovery? Asking these in advance means you're not trying to remember the answers on the morning of surgery.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many days before surgery should I stop taking blood thinners?",
        a: "This varies by medication and by procedure, so it must be confirmed with your surgical team, never stopped or adjusted on your own. Tell them about every medication and supplement you take well before your surgery date so there's time to plan this properly.",
      },
      {
        q: "Can I eat or drink before surgery?",
        a: "Most operations require fasting for a set period beforehand, but the exact number of hours depends on your anaesthesia and your hospital's protocol. Always follow the specific instructions given to you rather than a general rule.",
      },
      {
        q: "Do I need someone to drive me home after surgery?",
        a: "Yes, for any procedure involving general anaesthesia or sedation, you won't be able to drive yourself safely afterward. Arrange a ride, and for many procedures, someone to stay with you for the first night, well before your surgery date.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}

// Was `.filter(p => p.slug !== slug).slice(0, count)` — always the first
// `count` entries of the array in fixed order, same bug that was already
// found and fixed on conditionPages.js's getOtherConditions (see its
// comment there). The two most recently added posts, being last in the
// array, would never appear in the first 3 of anyone else's filtered list —
// meaning no other post would ever link to them, and their only inbound
// links would be the /blog index. Rotating the start point by each post's
// own index means every post appears in the "next `count`" of whichever
// posts precede it, so the whole set round-robins and nothing is left
// permanently unlinked, exactly like the conditions fix.
export function getRelatedPosts(slug, count = 3) {
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return blogPosts.slice(0, count);
  const rotated = [...blogPosts.slice(idx + 1), ...blogPosts.slice(0, idx)];
  return rotated.slice(0, count);
}
