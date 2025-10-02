import { Prompt } from "../types";

export const MOTD = `Welcome to terminal.pranavtitambe.in!

GitHub:  &nbsp;&nbsp;<a href="https://github.com/Pranavlovescode" target="_blank" rel="noopener noreferrer">https://github.com/Pranavlovescode</a>
LinkedIn: <a href="https://linkedin.com/in/pranav-titambe" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/pranav-titambe</a>

Hello, I'm <b>Pranav Titambe</b>. I am a passionate developer exploring the world of programming and technology.

Type 'help' to see the available commands.`.replace(/\n/g, "<br/>");

const KALI_LOGO = `
    <span class="text-kali-blue flex flex-col">
      <span>${"..............".replace(/ /g, "&nbsp;")}</span>
      <span>${"            ..,;:ccc,.".replace(/ /g, "&nbsp;")}</span>
      <span>${"          ......''';lxO.".replace(/ /g, "&nbsp;")}</span>
      <span>${".....''''..........,:ld;".replace(/ /g, "&nbsp;")}</span>
      <span>${"           .';;;:::;,,.x,".replace(/ /g, "&nbsp;")}</span>
      <span>${"      ..'''.            0Xxoc:,.  ...".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"  ....                ,ONkc;,;cokOdc',.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${" .                   OMo           ':ddo.".replace(
        / /g,
        "&nbsp;"
      )}</span>

      <span>${"                    dMc               :OO;".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    0M.                 .:o.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                    ;Wd".replace(/ /g, "&nbsp;")}</span>
      <span>${"                     ;XO,".replace(/ /g, "&nbsp;")}</span>
      <span>${"                       ,d0Odlc;,..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                            ..',;:cdOOd::,.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                     .:d;.':;.".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                        'd,  .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                          ;l   ..".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                           .o".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             c".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                             .'".replace(
        / /g,
        "&nbsp;"
      )}</span>
      <span>${"                                              .".replace(
        / /g,
        "&nbsp;"
      )}</span>
    </span>
  `;

const TECH_STACK = `┌─[<span class="text-kali-green">TECH_STACK</span>]─[<span class="text-kali-cyan">0x41525345</span>]<br/>├─[<span class="text-kali-yellow">FRONTEND</span>] <span class="text-kali-cyan">React.js</span>/<span class="text-kali-blue">TypeScript</span>/<span class="text-kali-purple">Tailwind</span>/<span class="text-kali-pink">Vite</span><br/>├─[<span class="text-kali-yellow">BACKEND</span>] <span class="text-kali-green">Node.js</span>/<span class="text-kali-cyan">Express</span>/<span class="text-kali-blue">Next.js</span>/<span class="text-kali-purple">REST</span><br/>├─[<span class="text-kali-yellow">DATABASE</span>] <span class="text-kali-green">MongoDB</span>/<span class="text-kali-blue">MySQL</span>/<span class="text-kali-cyan">Prisma</span><br/>├─[<span class="text-kali-yellow">DEVOPS</span>] <span class="text-kali-red">Git</span>/<span class="text-kali-purple">Docker</span>/<span class="text-kali-cyan">Vercel</span>/<span class="text-kali-pink">Linux</span><br/>├─[<span class="text-kali-yellow">R&D</span>] <span class="text-kali-green">GraphQL</span>/<span class="text-kali-blue">Rust</span>/<span class="text-kali-purple">WASM</span>/<span class="text-kali-cyan">K8s</span><br/>└─[<span class="text-kali-red">STATUS</span>]: <span class="text-kali-yellow animate-pulse">>>LEARNING_MODE</span> <span class="text-kali-green">[ACTIVE]</span>`;

const COMMANDS: Record<
  string,
  (username: string, args: string[], history: string[]) => string
> = {
  su: () => "",
  whoami: (username) => username,
  motd: () => MOTD,
  pwd: () => "/",
  date: () => new Date().toLocaleDateString(),
  github: () => openLink("https://github.com/Pranavlovescode"),
  linkedin: () => openLink("https://linkedin.com/in/pranav-titambe"),
  repo: () => openLink("https://github.com/Pranavlovescode/terminal-website"),
  email: () => openLink("mailto:pranavtitambe04@gmail.com"),
  cat: () =>
    `Here's a cute cat for you! 🐱<br/><br/>${openLink("https://cataas.com/cat/cute")}`,
  kali: () => KALI_LOGO,
  techstack: () => TECH_STACK,
  skills: () => `<span class="text-kali-cyan">Programming Skills:</span><br/><br/>
<span class="text-kali-green">C</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-green">████████████████████████████████</span><span class="text-kali-gray">████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">80%</span><br/>
<span class="text-kali-yellow">PHP</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-yellow">████████████████████████████</span><span class="text-kali-gray">████████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">70%</span><br/>
<span class="text-kali-blue">Python</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-blue">████████████████████████</span><span class="text-kali-gray">████████████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">60%</span><br/>
<span class="text-kali-purple">HTML</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-purple">████████████████████████████████</span><span class="text-kali-gray">████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">80%</span><br/>
<span class="text-kali-red">CSS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-red">████████████████</span><span class="text-kali-gray">████████████████████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">40%</span><br/>
<span class="text-kali-pink">SQL</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-gray">[</span><span class="text-kali-pink">████████████████████████████</span><span class="text-kali-gray">████████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">70%</span><br/>
<span class="text-kali-purple">JS</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;<span class="text-kali-orange">[</span><span class="text-kali-purple">████████████</span><span class="text-kali-gray">████████████████████████████</span><span class="text-kali-gray">]</span>&nbsp;<span class="text-kali-cyan">30%</span>`,
  projects: () => `┌─[<span class="text-kali-green">PROJECTS</span>]─[<span class="text-kali-cyan">0x50524F4A</span>]<br/>├─<span class="text-kali-cyan">terminal-website</span> <span class="text-kali-yellow">[LIVE]</span> <span class="text-kali-green">React/TS/Tailwind</span><br/>├─<span class="text-kali-blue">github-readme-tech</span> <span class="text-kali-yellow">[DEPLOYED]</span> <span class="text-kali-green">Next.js/Vercel</span><br/>├─<span class="text-kali-purple">fullstack-apps</span> <span class="text-kali-cyan">[DEV]</span> <span class="text-kali-green">MERN/Express</span><br/>├─<span class="text-kali-pink">open-source</span> <span class="text-kali-green">[ACTIVE]</span> <span class="text-kali-green">Community/Tools</span><br/>└─[<span class="text-kali-red">STATS</span>]: <span class="text-kali-yellow">4+</span> <span class="text-kali-cyan">repos</span> | <span class="text-kali-green">∞</span> <span class="text-kali-yellow">commits</span>`,
  about: (username) => `Hello, ${username}!

    I'm <b>Pranav Titambe</b>, a passionate developer exploring the exciting world of programming and technology. I'm constantly learning and building projects to expand my knowledge and skills.

    I have a keen interest in <b>web development</b> and enjoy working with modern technologies like <b>React</b>, <b>TypeScript</b>, and <b>Node.js</b>. I'm always eager to learn new frameworks and tools to create better applications.

    I am currently getting my hands dirty on <b>Spring Boot</b> and <b>Deep Learning</b>.

    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and connecting with the developer community. Feel free to check out my projects and connect with me!`,
  echo: (_, args) => args.join("&nbsp;"),
  history: (_, __, history) => history.join("<br/>"),
  // Additional commands referenced in help
  info: (username) => `Hello, ${username}!

    I'm <b>Pranav Titambe</b>, a passionate developer exploring the exciting world of programming and technology. I'm constantly learning and building projects to expand my knowledge and skills.

    I have a keen interest in <b>web development</b> and enjoy working with modern technologies like <b>React</b>, <b>TypeScript</b>, and <b>Node.js</b>. I'm always eager to learn new frameworks and tools to create better applications.

    I am currently getting my hands dirty on <b>Spring Boot</b> and <b>Deep Learning</b>.

    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and connecting with the developer community. Feel free to check out my projects and connect with me!`,
  links: () => `<span class="text-kali-cyan">🔗 Important Links & Socials</span><br/><br/>
<span class="text-kali-green">GitHub:</span> <a href="https://github.com/Pranavlovescode" target="_blank" rel="noopener noreferrer">https://github.com/Pranavlovescode</a><br/>
<span class="text-kali-blue">LinkedIn:</span> <a href="https://linkedin.com/in/pranav-titambe" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/pranav-titambe</a><br/>
<span class="text-kali-yellow">Email:</span> <a href="mailto:pranavtitambe04@gmail.com">pranavtitambe04@gmail.com</a><br/>
<span class="text-kali-purple">Portfolio:</span> <a href="https://terminal.pranavtitambe.in" target="_blank" rel="noopener noreferrer">https://terminal.pranavtitambe.in</a><br/>
<span class="text-kali-pink">Repository:</span> <a href="https://github.com/Pranavlovescode/terminal-website" target="_blank" rel="noopener noreferrer">https://github.com/Pranavlovescode/terminal-website</a>`,
  welcome: () => MOTD,
  contact: () => `<span class="text-kali-cyan">📧 Contact Information</span><br/><br/>
<span class="text-kali-green">Email:</span> pranavtitambe04@gmail.com<br/>
<span class="text-kali-blue">LinkedIn:</span> linkedin.com/in/pranav-titambe<br/>
<span class="text-kali-yellow">GitHub:</span> github.com/Pranavlovescode<br/><br/>
<span class="text-kali-white">Feel free to reach out for collaborations, opportunities, or just to say hello!</span>`,
  exit: () => {
    setTimeout(() => window.close(), 1000);
    return "<span class=\"text-kali-red\">Terminating session...</span>";
  },
};

export const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear", "help"].sort(
  (a, z) => a.localeCompare(z)
);

export function getCommandResponse(
  { command, sudo, args }: Prompt,
  username: string,
  history: string[]
) {
  if (sudo && !command) return "Usage: sudo [command] [args]";
  if (!command) return "";

  if (command in COMMANDS) {
    let result = COMMANDS[command](username, args, history);
    if (command !== "kali") {
      result = result.replace(/\n/g, "<br/>");
    }

    return result;
  }

  if (command === "help") {
    return `
<span class="text-kali-gray">Available commands</span><br/><br/>
<span class="text-kali-green">help</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">List all available commands</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">help</span><br/>
<span class="text-kali-green">about</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">About me.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">about</span><br/>
<span class="text-kali-green">info</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Information about me.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">info</span><br/>
<span class="text-kali-green">projects</span>&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Projects I have worked on.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">projects</span><br/>
<span class="text-kali-green">links</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Get all my important links and socials</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">links</span><br/>
<span class="text-kali-green">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Display programming skills.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">skills</span><br/>
<span class="text-kali-green">email</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Send an email to me.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">email</span><br/>
<span class="text-kali-green">welcome</span>&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Display hero section.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">welcome</span><br/>
<span class="text-kali-green">contact</span>&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Display contact information.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">contact</span><br/>
<span class="text-kali-green">github</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Redirects to my GitHub account.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">github</span><br/>
<span class="text-kali-green">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Clear the screen.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">clear</span><br/>
<span class="text-kali-green">exit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-white">Terminate a page.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">|</span> <span class="text-kali-green">exit</span><br/><br/>
<span class="text-kali-white">Tab or Ctrl + i</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-kali-gray">=></span> <span class="text-kali-white">autocompletes the command</span><br/>
<span class="text-kali-white">Up Arrow or Down Arrow</span> <span class="text-kali-gray">=></span> <span class="text-kali-white">scroll through the output.</span>`;
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
