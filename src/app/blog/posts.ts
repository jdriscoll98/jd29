export interface Post {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "what-happened-to-the-scribes",
    date: "2026-04-18",
    title: "What Happened to the Scribes?",
    description:
      "A thousand-year profession was rendered obsolete in a generation. The story of what happened to medieval scribes — and why it rhymes uncomfortably with right now.",
    tags: ["history", "technology", "ai"],
    content: [
      "Before there were books, there were scribes. For a thousand years they were the indispensable infrastructure of knowledge — bent over parchment in cold scriptoriums, copying out Bibles line by line, illuminating manuscripts with pigments ground from lapis lazuli. A single Bible took fifteen months. A good scribe was part monk, part artist, part administrator. Without them, civilization's memory would have gone dark.",
      "Then, around 1450, a goldsmith from Mainz changed everything.",
      "Johannes Gutenberg's moveable-type printing press could produce 3,600 pages a day. A scribe, working from dawn to dusk, managed perhaps two or three. The math was brutal. Within decades, a technology that had taken centuries to build — the entire scribal profession — was rendered essentially obsolete.",
      "What happened next is a story about disruption, denial, adaptation, and the uncomfortable gap between how technology transforms societies and what it does to the individuals living through that transformation. It is also, unmistakably, a story about right now.",
      "// The World Before the Press",
      "To understand what was lost — and what was threatened — you have to understand what scribes actually were. They weren't merely copyists. Most worked in monasteries, scriptoria, universities, and royal courts, preserving legal codes, religious texts, financial records, and diplomatic correspondence. They were the HR departments, the legal teams, the record-keepers of medieval civilization. Many were highly educated, fluent in Latin and Greek, trusted with the secrets of kings.",
      "A common medieval saying captured the physical cost of the work: \u201CThe fingers write, but the whole body suffers.\u201D Scribes worked only during daylight hours — candles were forbidden in scriptoriums — bent over desks for hours, their quills requiring constant re-cutting, their parchment made from treated animal hide. The intricate decorated initials and marginalia they produced were works of art in their own right.",
      "Books were so rare and expensive that a single volume might be chained to a lectern, too valuable to risk being carried out. Literacy itself was a marker of elite status. The scribe wasn't just a worker — he was a gatekeeper of a world in which knowledge and power were nearly synonymous.",
      "// The Disruption",
      "Gutenberg's first major print run was roughly 200 copies of the Latin Bible. They sold before the final page was set. By 1500, presses across Western Europe had collectively produced more than 20 million volumes. Nearly eight million religious books were printed in that period alone — approximately 180 times what a single scribe could have produced in the same span of time.",
      "The economic logic was devastating. The demand for scribes evaporated almost entirely within a generation. The printing press didn't gradually erode the profession — it made it structurally unnecessary.",
      "// The Backlash",
      "The response was not quiet resignation. Scribes' guilds across Europe smashed presses and intimidated printers, and in Paris the guild successfully lobbied to delay the introduction of the printing press into the city for twenty years. When the delay finally ended and printed books began arriving, the reaction turned physical.",
      "The most dramatic confrontation came when Johann Fust — Gutenberg's former business partner, now selling printed Bibles independently — arrived in Paris to find buyers among the thousands of theology students at the Sorbonne. On paper it seemed like a perfect market. What Fust hadn't anticipated was the political and financial muscle of the Scribes' Guild. They ran him out of town and accused him of witchcraft. This was not a metaphorical accusation. In an age of burnings at the stake and active inquisitions, it was about as serious a charge as could be leveled at a man. The crime, essentially, was producing identical books in impossible quantities — something that could only be explained, in the Guild's telling, by a deal with the devil. Fust escaped. His presses elsewhere in Europe were not so lucky; printers across the continent had their offices destroyed and their equipment smashed.",
      "The intellectual case was made most memorably by Abbot Johannes Trithemius, who in 1492 wrote an entire treatise defending hand-copying — a document that functions today as a near-perfect artifact of technological denial. Printed books, he argued, were made of paper and would quickly disappear, while books on parchment ensured lasting remembrance. He worried that monks would grow idle without the discipline of scribal work, that the proliferation of cheap books would degrade learning, that quality and sanctity would be sacrificed on the altar of speed and volume. These were not stupid arguments. The early printed books did contain more errors than carefully copied manuscripts. The concern about quality was real. What Trithemius couldn't see — what almost no one in 1492 could see — was that the trade-off was so lopsided in favor of the press that his objections would be forgotten within a generation. His treatise, in a twist of history that reads almost like a joke, was widely circulated via printing press.",
      "// What Actually Happened to Them",
      "The honest answer is that most scribes simply stopped being scribes. The profession didn't transform — it contracted and largely disappeared over a few decades. Former scribes were absorbed into administrative roles, became correctors, bookbinders, or bookkeepers. A demand for luxury manuscripts persisted for a time — wealthy patrons still wanted handmade, illuminated books as status symbols — but it was a shrinking niche. Some transitioned into legal work as scriveners, copying and certifying documents, though it was a step down in status and pay.",
      "But the most remarkable individual story of the transition belongs to a man named Peter Sch\u00F6ffer.",
      "Born around 1425, Sch\u00F6ffer trained as a calligrapher in Paris, where he worked as a manuscript copyist to support himself while studying at university. He was, in the most literal sense, a professional scribe. Then, in 1451, he became an apprentice to Johannes Gutenberg — walking directly from one world into the other.",
      "His scribal background proved not to be a liability but an extraordinary advantage. When Gutenberg's financier foreclosed on the printing workshop and took Sch\u00F6ffer on as a partner, the two produced the Mainz Psalter of 1457 — described by contemporaries as so elegant it seemed impossible it had been produced with cast type. The calligrapher's eye made the printed work better than anything Gutenberg himself had managed.",
      "Sch\u00F6ffer went on to design some of the first typefaces in European printing, translating the letterforms he had spent years writing by hand into metal type. He introduced Greek characters into print, pioneered colored inks, and is credited with first including a title page and printers' names in published books. By his death in 1503, he had printed more than 300 books and built a publishing dynasty that lasted four generations.",
      "A man who began his career copying manuscripts one letter at a time ended it having transformed the entire infrastructure of written knowledge. His scribal training wasn't made obsolete by the press. It became the competitive advantage that made him its master.",
      "// The Parallel That's Hard to Ignore",
      "The scribes' story has been invoked repeatedly in discussions about artificial intelligence — and specifically about what AI means for programmers. The parallel is uncomfortable precisely because it's so clean.",
      "Programmers, like scribes, are specialists in translating human intent into a precise formal system. Scribes translated thought into Latin manuscript conventions; programmers translate it into code. AI is now automating the mechanical reproduction part of that work, just as the press automated copying. The protests follow the same script: the new technology is buggy, unreliable, deficient in quality — almost word for word what Trithemius said about printed books.",
      "Some paths forward are already visible. The programmers who will thrive are likely those who do what Sch\u00F6ffer did — bring deep craft knowledge into the new technology rather than fight against it. The skill shifts from writing code to judging it: knowing when the AI's output is subtly wrong, understanding architecture well enough to ask better questions, applying the engineer's intuition that no language model fully replicates.",
      "New roles will emerge that don't yet have names, just as \u201Cauthor,\u201D \u201Ceditor,\u201D and \u201Cpublisher\u201D didn't exist as professions before the printing press created the conditions for them.",
      "But here is the part worth sitting with honestly, the part the optimistic version of this story tends to skip: the scribes who lived through the transition in the 1470s didn't get to skip ahead to the chapter where everything worked out. The new jobs took generations to materialize. Most scribes didn't become Peter Sch\u00F6ffer.",
      "The printing press was one of the most consequential inventions in human history. It democratized knowledge, enabled the Reformation, and eventually gave us the modern world. It was also, for the people whose livelihoods it displaced, a disruption that arrived quietly, over decades, with no safety net and no plan.",
      "That's the full story of what happened to the scribes. It's worth knowing — especially right now.",
    ],
  },
  {
    slug: "hello-world",
    date: "2026-04-16",
    title: "Hello, World",
    description:
      "Kicking off this blog — a place to share notes on software engineering, real-time systems, and whatever else I'm building or learning.",
    tags: ["meta", "intro"],
    content: [
      "Welcome to the blog. I've been meaning to start writing for a while, and today I finally did.",
      "The plan is simple: short posts about things I'm building, problems I've run into, and ideas I'm turning over. No grand schedule, no content strategy — just notes worth writing down.",
      "Expect a mix of software engineering, real-time systems (currently my day job at the PGA Tour), side projects, and the occasional detour into chess or golf.",
      "Thanks for reading. More soon.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
