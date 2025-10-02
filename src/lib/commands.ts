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
  skills: () => `┌─[<span class="text-kali-green">SKILL_MATRIX</span>]─[<span class="text-kali-cyan">0x534B494C4C</span>]<br/>├─<span class="text-kali-cyan">JavaScript</span> <span class="text-kali-green">█████████</span><span class="text-kali-gray">█</span> <span class="text-kali-yellow">90%</span><br/>├─<span class="text-kali-blue">TypeScript</span> <span class="text-kali-blue">████████</span><span class="text-kali-gray">██</span> <span class="text-kali-yellow">85%</span><br/>├─<span class="text-kali-purple">Python</span> <span class="text-kali-purple">███████</span><span class="text-kali-gray">███</span> <span class="text-kali-yellow">75%</span><br/>├─<span class="text-kali-pink">React.js</span> <span class="text-kali-cyan">████████</span><span class="text-kali-gray">██</span> <span class="text-kali-yellow">85%</span><br/>├─<span class="text-kali-green">Node.js</span> <span class="text-kali-green">████████</span><span class="text-kali-gray">██</span> <span class="text-kali-yellow">80%</span><br/>├─<span class="text-kali-red">Git/Linux</span> <span class="text-kali-red">█████████</span><span class="text-kali-gray">█</span> <span class="text-kali-yellow">90%</span><br/>└─[<span class="text-kali-red">STATUS</span>]: <span class="text-kali-yellow animate-pulse">>>UPGRADING</span> <span class="text-kali-green">[∞]</span>`,
  projects: () => `┌─[<span class="text-kali-green">PROJECTS</span>]─[<span class="text-kali-cyan">0x50524F4A</span>]<br/>├─<span class="text-kali-cyan">terminal-website</span> <span class="text-kali-yellow">[LIVE]</span> <span class="text-kali-green">React/TS/Tailwind</span><br/>├─<span class="text-kali-blue">github-readme-tech</span> <span class="text-kali-yellow">[DEPLOYED]</span> <span class="text-kali-green">Next.js/Vercel</span><br/>├─<span class="text-kali-purple">fullstack-apps</span> <span class="text-kali-cyan">[DEV]</span> <span class="text-kali-green">MERN/Express</span><br/>├─<span class="text-kali-pink">open-source</span> <span class="text-kali-green">[ACTIVE]</span> <span class="text-kali-green">Community/Tools</span><br/>└─[<span class="text-kali-red">STATS</span>]: <span class="text-kali-yellow">4+</span> <span class="text-kali-cyan">repos</span> | <span class="text-kali-green">∞</span> <span class="text-kali-yellow">commits</span>`,
  about: (username) => `Hello, ${username}!

    I'm <b>Pranav Titambe</b>, a passionate developer exploring the exciting world of programming and technology. I'm constantly learning and building projects to expand my knowledge and skills.

    I have a keen interest in <b>web development</b> and enjoy working with modern technologies like <b>React</b>, <b>TypeScript</b>, and <b>Node.js</b>. I'm always eager to learn new frameworks and tools to create better applications.

    I am currently getting my hands dirty on <b>Spring Boot</b> and <b>Deep Learning</b>.

    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and connecting with the developer community. Feel free to check out my projects and connect with me!`,
  echo: (_, args) => args.join("&nbsp;"),
  history: (_, __, history) => history.join("<br/>"),
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
<div class="mt-2">
  <div class="text-kali-blue text-lg font-bold mb-3">
    ┌─[ <span class="text-kali-green">AVAILABLE_COMMANDS</span> ]─[ <span class="text-kali-cyan">TERMINAL_ARSENAL</span> ]
  </div>
  
  <div class="ml-4 space-y-2">
    <div class="text-kali-yellow">├─[ <span class="text-kali-white font-semibold">NAVIGATION</span> ]</div>
    <div class="ml-6 space-y-1 text-kali-gray">
      <div><span class="text-kali-cyan">clear</span> - Clear the terminal screen</div>
      <div><span class="text-kali-cyan">help</span> - Display this help menu</div>
      <div><span class="text-kali-cyan">pwd</span> - Print working directory</div>
      <div><span class="text-kali-cyan">whoami</span> - Display current user</div>
    </div>
    
    <div class="text-kali-yellow">├─[ <span class="text-kali-white font-semibold">INFORMATION</span> ]</div>
    <div class="ml-6 space-y-1 text-kali-gray">
      <div><span class="text-kali-green">about</span> - Display detailed profile information</div>
      <div><span class="text-kali-green">motd</span> - Show message of the day</div>
      <div><span class="text-kali-green">techstack</span> - Display technology arsenal</div>
      <div><span class="text-kali-green">skills</span> - Show programming skill levels</div>
      <div><span class="text-kali-green">projects</span> - List current projects</div>
    </div>
    
    <div class="text-kali-yellow">├─[ <span class="text-kali-white font-semibold">SOCIAL_LINKS</span> ]</div>
    <div class="ml-6 space-y-1 text-kali-gray">
      <div><span class="text-kali-blue">github</span> - Open GitHub profile</div>
      <div><span class="text-kali-blue">linkedin</span> - Open LinkedIn profile</div>
      <div><span class="text-kali-blue">email</span> - Send an email</div>
      <div><span class="text-kali-blue">repo</span> - Open this website's repository</div>
    </div>
    
    <div class="text-kali-yellow">├─[ <span class="text-kali-white font-semibold">UTILITIES</span> ]</div>
    <div class="ml-6 space-y-1 text-kali-gray">
      <div><span class="text-kali-purple">echo</span> - Display text</div>
      <div><span class="text-kali-purple">date</span> - Show current date</div>
      <div><span class="text-kali-purple">history</span> - Show command history</div>
      <div><span class="text-kali-purple">su</span> - Switch user (advanced)</div>
    </div>
    
    <div class="text-kali-yellow">└─[ <span class="text-kali-white font-semibold">EASTER_EGGS</span> ]</div>
    <div class="ml-6 space-y-1 text-kali-gray">
      <div><span class="text-kali-pink">kali</span> - Display Kali Linux ASCII art</div>
      <div><span class="text-kali-pink">cat</span> - Get a cute cat image</div>
    </div>
  </div>
  
  <div class="mt-4 text-kali-blue">
    └─[ <span class="text-kali-green">TIP</span> ]: Try <span class="text-kali-yellow">'sudo'</span> prefix for advanced mode
  </div>
  
  <div class="mt-3 text-sm text-kali-text-muted">
    <span class="text-kali-red">➜</span> Type any command to explore!
  </div>
</div>
`.trim().replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
