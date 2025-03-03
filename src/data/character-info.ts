export interface CharacterInfoModel {
    id: string;
    charName: string,
    // if the charName's first name is not equal to image location
    imageAlias?: string;
    age: string,
    birthday: string,
    urobium: string,
    interests: string,
    occupation: string,
    biography: string,
    color: string
}

export const CharacterInfo: CharacterInfoModel[] = [
    {
        "id": "jfbio",
        "charName": "James Forge",
        "age": "23",
        "birthday": "January 28th",
        "urobium": "Heat",
        "interests": "Chemistry, Reading, Jogging, Excessive Introspection",
        "occupation": "Teaching Assistant",
        "biography": "James. He's a bit of a loser.",
        "color": "Red"
    },
    {
        "id": "ebbio",
        "charName": "Eric Brooks",
        "age": "27",
        "birthday": "July 2nd",
        "urobium": "Liquids",
        "interests": "Weightlifting, Marksmanship, People-Watching, Eavesdropping",
        "occupation": "Field Medic",
        "biography": "James's best friend. Keeps to himself otherwise.",
        "color": "Blue"
    },
    {
        "id": "lsbio",
        "charName": "Laura Stanton",
        "age": "25",
        "birthday": "June 6th",
        "urobium": "Solids",
        "interests": "Information Technology, Cryptography, Baseball, Meeting new people",
        "occupation": "Shock Trooper",
        "biography": "The team's tech expert. Usually more interested in breaking things than fixing them, though.",
        "color": "Gold"
    },
    {
        "id": "axbio",
        "charName": "Amanda Xun",
        "age": "31",
        "birthday": "February 27th",
        "urobium": "Electromagnetism",
        "interests": "Physics, Reading, Finance, Electric Guitar",
        "occupation": "Squad Leader",
        "biography": "The captain of Unit 27. Amanda leads with a fair hand and avoids making snap judgments even towards her enemies.",
        "color": "Purple"
    },
    {
        "id": "dkbio",
        "charName": "Dean Knox",
        "age": "39",
        "birthday": "August 30th",
        "urobium": "Gases",
        "interests": "Physics, Computer Science, Neuroscience, Gambling, Aviation",
        "occupation": "Researcher, Mercenary General",
        "biography": "Head of TeraDyne Corporation's field operations and inventor of Urobium, Dean is just as much an accomplished Scientist as he is a powerful combatant. Dean's prowess is matched only by his ruthlessness, recruiting James into the company against his will. He seems to have a personal history with the squad of rogue androids...",
        "color": "Green"
    },
    {
        "id": "fkbio",
        "charName": "Fiona Kramer",
        "age": "31",
        "birthday": "September 21st",
        "urobium": "Oxidation",
        "interests": "Chemistry, Fashion, Illustration, Racing",
        "occupation": "Research Director",
        "biography": "Head of TeraDyne's R&D department. While her role is mostly administrative, Fiona applies her knowledge to the battlefield with her ability to generate reactive gases on the fly. Despite her explosive powers, Fiona is even-tempered and cautious, making her a useful foil to the more temperamental Dean. Even though they butt heads daily, the two remain reliable friends.",
        "color": "Teal"
    },
    {
        "id": "lgbio",
        "charName": "Lawrence Gabriels",
        "age": "67",
        "birthday": "April 4th",
        "urobium": "Solids",
        "interests": "Robotics, Coffee brewing, Classic literature, social media",
        "occupation": "CEO, TeraDyne Corporation",
        "biography": "CEO of TeraDyne energy and TeraDyne Security Corporations, Lawrence is a peculiarly laidback and jovial boss, not too concerned either with the company or even himself. This might be because he leaves all of the actual work to Dean, though his nominal subordinate doesn't particularly seem to mind.",
        "color": "White"
    },
    {
        "id": "pdbio",
        "charName": "Patrick Dempsey",
        "age": "54",
        "birthday": "February 29th",
        "urobium": "Liquids",
        "interests": "TV Streaming, Smoking, Poker, Gossip",
        "occupation": "Executive Security",
        "biography": "Fiona's right hand... something. Patrick is theoretically Fiona's bodyguard, though if he's had any accomplishments she dare not notice them.",
        "color": "Gray"
    },
    {
        "id": "kmbio",
        "charName": "Kieran",
        "age": "??",
        "birthday": "September 30th",
        "urobium": "Quantum Position",
        "interests": "Parkour, Reading, Theft, Horror Movies",
        "occupation": "Infiltrator",
        "biography": "A thief who turns James's life upside-down by breaking into his university to obtain the experimental device hidden within. Kieran has a sharp tongue, a sharp wit and a sharp blade, and is eager to demonstrate all three of them as the situation calls for it. Despite his harsh sense of humor and violent disposition, Kieran possesses an odd fondness for James specifically.",
        "color": "Cyan"
    },
    {
        "id": "cmbio",
        "charName": "Claire",
        "age": "??",
        "birthday": "September 30th",
        "urobium": "Gravity",
        "interests": "Combat Sports, Fashion, Sculpting, Debate, Sightseeing",
        "occupation": "Berserker",
        "biography": "A grouchy robot who's always seen with Kieran, the 'sister' of the two has a temper as fierce as her claws. Despite that, Claire genuinely values the few who earn her respect and will die for them just as quickly as she'll kill her enemies.",
        "color": "Pink"
    },
    {
        "id": "mmbio",
        "charName": "LMS-02 'Morgan'",
        imageAlias: "morgan",
        "age": "??",
        "birthday": "??",
        "urobium": "Acceleration",
        "interests": "Surfing, Day Trading, Racing, Boxing",
        "occupation": "Scout",
        "biography": "Kieran and Claire's 'mother', Morgan is as steely as she is severe, not wasting words or time. While terse, Morgan always spares an ear for her two children and Typhon, and enjoys a strange rapport with Fiona Kramer despite their rivalry.",
        "color": "Orange"
    },
    {
        "id": "tmbio",
        "charName": "LMS-01 'Typhon'",
        imageAlias: "typhon",
        "age": "??",
        "birthday": "??",
        "urobium": "Plasma",
        "interests": "Warfare, History, Natural Sciences, Philosophy, Aviation, Mechanical Engineering",
        "occupation": "Siege Weapon",
        "biography": "The apparent leader of the rogue machines, Typhon has an intense hatred for Dean. While on the battlefield his rage burns bright, Typhon is a devoted family man who fights for sport just as much as he does out of vengeance. Typhon also possesses a shocking hunger for knowledge to peer his archnemesis, though whether it's out of genuine curiosity or spite for his rival remains to be seen.",
        "color": "Midnight Blue"
    }
];