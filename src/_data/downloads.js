// Files listed on the Downloads page. PDFs live in src/assets/downloads/.
// Sizes are read at build time, so the build fails if a listed file is missing.
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "assets", "downloads");

function file(name) {
  const bytes = fs.statSync(path.join(DIR, name)).size;
  const size =
    bytes >= 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.round(bytes / 1024)} KB`;
  return { url: `/assets/downloads/${name}`, size };
}

function bands(prefix) {
  return [
    { label: "Grades 3–5", ...file(`${prefix}_Grades_3-5.pdf`) },
    { label: "Grades 6–8", ...file(`${prefix}_Grades_6-8.pdf`) },
    { label: "Grades 9–12", ...file(`${prefix}_Grades_9-12.pdf`) },
  ];
}

module.exports = () => ({
  everyone: [
    {
      title: "Competition Guide & FAQ",
      body: "How Battle of the Counties works: who can participate, the four required parts, the Virtual Qualifier submission, judging, and common questions.",
      ...file("Battle_of_the_Counties_Competition_Guide_and_FAQ_2026-27.pdf"),
    },
    {
      title: "Schools Reinventing Counties Player & Educator Guide",
      body: "An overview of the learning experience for students and educators, from the California State Capitol through the county pathways.",
      ...file("Schools_Reinventing_Counties_Player_and_Educator_Guide_2026-27.pdf"),
    },
    {
      title: "State Seal of Civic Engagement (SSCE) Guide",
      body: "How Schools Reinventing Counties can support learning aligned with California's State Seal of Civic Engagement. For schools, districts, and county offices of education.",
      ...file("Schools_Reinventing_Counties_SSCE_Guide_2026-27.pdf"),
    },
  ],

  prompts: [
    { community: "Huntington Beach", title: "Rigs to Reefs", files: bands("Huntington_Beach_Battle_Prompt_Rubric") },
    { community: "Anaheim", title: "Reimagining the Community School", files: bands("Anaheim_Battle_Prompt_Rubric") },
    { community: "Fullerton", title: "Designing a City for the Future", files: bands("Fullerton_Battle_Prompt_Rubric") },
    { community: "Santa Ana", title: "Civic Leadership & Local Government", files: bands("Santa_Ana_Battle_Prompt_Rubric") },
    { community: "Irvine", title: "Community & Mental Wellness", files: bands("Irvine_Battle_Prompt_Rubric") },
    { community: "San Juan Capistrano", title: "History, Culture & Community Identity", files: bands("San_Juan_Capistrano_Battle_Prompt_Rubric") },
    { community: "Catalina Island · Open Pathway", title: "Island in Balance", files: bands("Catalina_Island_Battle_Prompt_Rubric") },
  ],

  notebooks: [
    { community: "Orange County", title: "Field Notebook", files: bands("Orange_County_Field_Notebook") },
    { community: "Catalina Island", title: "Field Notebook", files: bands("Catalina_Island_Field_Notebook") },
  ],

  educatorGuides: [
    {
      title: "Orange County Educator Guide",
      body: "The Orange County Minecraft Education world: six communities, six real-world challenges, and how to run them.",
      ...file("Educator_Guide_Orange_County.pdf"),
    },
    {
      title: "Catalina Island Educator Guide",
      body: "The Catalina Island Minecraft Education world, the open pathway for students whose county isn't in the experience yet.",
      ...file("Educator_Guide_Catalina_Island.pdf"),
    },
    {
      title: "Extend the Learning Rubric",
      body: "An optional rubric for classroom extension work. It is not scored in Battle of the Counties.",
      ...file("Extend_the_Learning_Rubric.pdf"),
    },
  ],

  coes: [
    {
      title: "COE Coordinator Toolkit",
      body: "A common framework for participating county offices of education to launch and support Battle of the Counties locally.",
      ...file("BotC_COE_Coordinator_Toolkit_2026-27.pdf"),
    },
  ],

  judges: [
    {
      title: "Judging Rubric & Judge Guide",
      body: "Judging principles, the recommended review process, and the official four-criteria rubric.",
      ...file("Battle_of_the_Counties_Judging_Rubric_and_Judge_Guide_2026-27.pdf"),
    },
  ],
});
