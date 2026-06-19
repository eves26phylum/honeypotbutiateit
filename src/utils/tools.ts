import { PermissionFlagsBits } from "discord-api-types/v10";

export function getDiscordDate(discordId: string | bigint): Date {
    const idBigInt = BigInt(discordId);
    const discordEpochOffset = idBigInt >> 22n;
    const unixTimestampMs = discordEpochOffset + 1420070400000n;
    return new Date(Number(unixTimestampMs));
}

export function hasPermission(permissions: bigint, permissionBit: bigint) {
    return (permissions & permissionBit) === permissionBit
        || (permissions & PermissionFlagsBits.Administrator) === PermissionFlagsBits.Administrator;
}
