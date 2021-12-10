// this code is based on the Voidstar Labs flavortext arduino library.
// it is not exactly the same nor is it that good but it kinda works
    var firstWord;
    var finalWord;
    //construction words
const construcs = [
  "Align",
  "Build",
  "Calibrat",
  "Instanc",
  "Configur",
  "Snort",
  "Microwav",
  "Tweak",
  "Wrangl",
  "Hack",
  "Pwn",
  "Boot",
  "Allocat",
  "Bind",
  "Revv",
  "Polish",
  "Fabricat",
  "Ping",
  "Refactor",
  "Load",
  "Quantify",
  "Assembl",
  "Distill",
  "Bak",
  "Receiv",
  "Unlock",
  "Compil",
  "Pressuriz",
  "Chooch",
  "Mak",
  "Engag",
  "Decrypt",
  "Synthesiz",
  "Predict",
  "Analyz",
  "Dispens",
  "Fir",
  "Insert",
  "Align",
  "Encourag",
  "Extrud",
  "Access",
  "Sharpen",
  "Enhanc",
  "Crank",
  "Stack",
  "Craft",
  "Render",
  "Mount",
  "Generat",
  "Implement",
  "Download",
  "Construct",
  "Wow! Amaz",
  "Moisten",
  "Customiz",
  "Compensat",
  "Buffer",
  "Transferr",
  "Induct",
  "Emitt",
  "Unzipp",
  "Squirt",
  "Feed",
  "Buy",
  "Spark",
  "Implant",
  "Triangulat",
  "Inject",
  "Link",
  "Brew",
  "Process",
  "Deploy",
  "Tun",
  "Attach",
  "Train",
  "Ignor",
  "Tapp",
  "Reload",
  "Simulat",
  "Fluff",
  "Fill",
  "Sort",
  "Updat",
  "Upgrad",
  "Prim",
  "Trac",
  "Inflat",
  "Wangjangl",
  "Charg",
  "Crack",
  "Ignor",
  "Activat",
  "Dial",
  "Pimp",
  "Collect",
  "Approach",
  "Approv",
  "Sampl",
  "Energiz",
  "Stuff"
  ];
//deconstructing words
const deconstructing = [
  "Deallocat",
  "Trash",
  "Unplugg",
  "Revok",
  "Forgett",
  "Discard",
  "Dropp",
  "Holster",
  "Shredd",
  "Jettison",
  "Dissolv",
  "Liquidat",
  "Releas",
  "Collimat",
  "Eject",
  "Ditch",
  "Leak",
  "Sell",
  "Banish",
  "Dereferenc",
  "Sacrific",
  "Desolder",
  "Destruct",
  "Decompil",
  "Blow",
  "Disengag",
  "Digest",
  "Smash",
  "Encrypt",
  "Crash",
  "Lock",
  "Purg",
  "Regrett",
  "Rewind",
  "Free",
  "Delet",
  "Clos",
  "Retract",
  "Collaps",
  "Liquefy",
  "Derezz",
  "Stow",
  "Archiv",
  "Suspend",
  "Suppress",
  "Clean",
  "Squash",
  "Secur",
  "Withdraw",
  "Dump",
  "Obfuscat",
  "Break",
  "Scrubb",
  "Abandon",
  "Flatten",
  "Stash",
  "Finish",
  "Evacuat",
  "Scrambl",
  "Recycl",
  "Crush",
  "Zipp",
  "Unload",
  "Disconnect",
  "Loosen",
  "Contain",
  "Debat",
  "Detach",
  "Neutraliz",
  "Salvag",
  "Empty",
  "Hid",
  "Disarm",
  "Pickl",
  "Disregard",
  "Yeet",
  "Scrapp",
  "Deflat",
  "Discharg",
  "Deactivat",
  "Steriliz",
  "Reliev",
  "Nuk",
  "Degauss",
  "Dismiss",
  "Drain",
  "Reject",
  "Nerf",
  "Pay",
  "Return",
  "Unstick",
  "Splitt",
  "Cancell",
  "Sham",
  "Embezzl",
  "Fling",
  "Regrett",
  "Halt",
  "Arrest",
  "Bury"
  ];
// nouns, vewy funny
  const nouns= [
    "content",
    "your mom",
    "the shmoo",
    "API",
    "the BJT man",
    "aesthetics",
    "backstory",
    "tactics",
    "bugs",
    "sauce",
  
    "warp drive",
    "data",
    "the funk",
    "AI",
    "crystals",
    "spaghetti",
    "fluxgate",
    "electrons",
    "loud noises",
    "wires",
  
    "bytecode",
    "the truth",
    "magic",
    "hot lava",
    "bits",
    "Brad",
    "Teensy",
    "sensors",
    "photons",
    "signal",
  
    "the planet",
    "password",
    "chips",
    "circuits",
    "privacy",
    "synergy",
    "widgets",
    "love",
    "packets",
    "reality",
  
    "lasers",
    "protocols",
    "voltage",
    "registers",
    "puns",
    "dogecoins",
    "kittens",
    "magic smoke",
    "plot device",
    "the core",
  
    "dank memes",
    "subroutines",
    "radiation",
    "steam",
    "trousers",
    "soda",
    "protocol",
    "one-liners",
    "the Gibson",
    "software",
  
    "a fat one",
    "holograms",
    "magnets",
    "inductors",
    "resistors",
    "capacitors",
    "viewers",
    "subscribers",
    "sausage",
    "my wife",
  
    "drama",
    "the future",
    "vectors",
    "the clowns",
    "a Palm Pilot",
    "5G implant",
    "monkeys",
    "breadboard",
    "Patreon",
    "money",
  
    "the Internet",
    "fluids",
    "the impostor",
    "beats",
    "dopamine",
    "fedora",
    "neural net",
    "comments",
    "ports",
    "you. Yes you",
  
    "mixtape",
    "[REDACTED]",
    "hot tub",
    "paperwork",
    "Nerf",
    "cyber-doobie",
    "the 1%",
    "the Matrix",
    "variables",
    "IP address"
  ];
  //determins whether or not its constructive or deconstructive
    var conDecon = Math.floor(Math.random() * 6);
  if (conDecon >= 4){
    var randNum = Math.floor(Math.random() * 101);
    firstWord =construcs[randNum] + "ing";
  }
  else if (conDecon < 4 ){
    var randNum1 = Math.floor(Math.random() * 100);
    firstWord = deconstructing[randNum1] + "ing";
  }
  //adds the random noun
finalWord =(firstWord +" "+ nouns[Math.floor(Math.random() * 109)] + "...");
//call this function to display the generated phrase.
function displayPhrase(){
document.getElementById("output").innerHTML=finalWord;
}