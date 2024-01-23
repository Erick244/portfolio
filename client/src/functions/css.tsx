export function colorToClass(color: TwColor, preFix: TwPrefix) {
    return `${preFix}-${color}-500`;
}

export enum TwColor {
    "SLATE" = "slate",
    "GRAY" = "gray",
    "ZINC" = "zinc",
    "NEUTRAL" = "neutral",
    "STONE" = "stone",
    "RED" = "red",
    "GREEN" = "green",
    "YELLOW" = "yellow",
    "ORANGE" = "orange",
    "AMBER" = "amber",
    "LIME" = "lime",
    "EMERALD" = "emerald",
    "TEAL" = "teal",
    "CYAN" = "cyan",
    "SKY" = "sky",
    "BLUE" = "blue",
    "INDIGO" = "indigo",
    "VIOLET" = "violet",
    "PURPLE" = "purple",
    "FUCHSIA" = "fuchsia",
    "PINK" = "pink",
    "ROSE" = "rose",
}

export enum TwPrefix {
    "BG" = "bg",
    "TEXT" = "text",
    "TO" = "to",
    "FROM" = "from",
}
