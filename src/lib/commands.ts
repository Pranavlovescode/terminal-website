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

const TECH_STACK = `<a href="https://github.com/Pranavlovescode/github-readme-tech-stack" target="_blank"><img src="https://github-readme-tech-stack.vercel.app/api/cards?title=Tech+Stack&width=420&align=center&titleAlign=center&fontSize=20&lineHeight=10&lineCount=2&theme=github_dark&line1=node.js%2Cnode.js%2Cauto%3Bexpress%2Cexpress%2Cffffff%3Bnestjs%2Cnestjs%2Ce12a54%3B&line2=react%2Creact%2Cauto%3Btailwindcss%2Ctailwind%2Cauto%3Btypescript%2Ctypescript%2Cauto%3B" alt="Tech Stack" /></a>`;

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
  about: (username) => `Hello, ${username}!

    I'm <b>Pranav Titambe</b>, a passionate developer exploring the exciting world of programming and technology. I'm constantly learning and building projects to expand my knowledge and skills.

    I have a keen interest in <b>web development</b> and enjoy working with modern technologies like <b>React</b>, <b>TypeScript</b>, and <b>Node.js</b>. I'm always eager to learn new frameworks and tools to create better applications.

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
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);
  return `Redirecting to <a href="" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}
