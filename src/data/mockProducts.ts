import type { Product, Quality, Rarity, Weapon } from '../@types';

const weapons: Weapon[] = ['AK-47', 'M4A4', 'M4A1-S', 'AWP', 'USP-S', 'Glock-18', 'Desert Eagle', 'MP9', 'MAC-10', 'SG 553', 'FAMAS', 'Galil AR', 'Scout', 'P90', 'Nova', 'XM1014', 'Karambit', 'Butterfly Knife', 'Bayonet', 'Flip Knife', 'M9 Bayonet'];
const qualities: Quality[] = ['FN', 'MW', 'FT', 'WW', 'BS'];
const rarities: Rarity[] = ['Consumer', 'Industrial', 'Mil-Spec', 'Restricted', 'Classified', 'Covert', 'Contraband'];

const skinNames: Record<string, string[]> = {
  'AK-47': ['Asiimov', 'Redline', 'Fire Serpent', 'Vulcan', 'Hydroponic', 'The Empress', 'Wild Lotus', 'Neon Revolution', 'Nightwish', 'Case Hardened', 'Fuel Injector', 'Panthera onca', 'Head Shot', 'Bloodsport', 'Legion of Anubis'],
  'M4A4': ['Howl', 'Asiimov', 'Dragon King', 'The Emperor', 'Poseidon', 'Evil Daimyo', 'In Living Color', 'Desolate Space', 'Radiation Hazard', 'Griffin', 'Spider Lily', 'Cyber Security'],
  'M4A1-S': ['Hyper Beast', 'Decimator', 'Golden Coil', 'Welcome to the Jungle', 'Nightmare', 'Master Piece', 'Basilisk', 'Cyrex', 'Mecha Industries', 'Chantico\'s Fire', 'Imminent Danger', 'Hot Rod'],
  'AWP': ['Dragon Lore', 'Medusa', 'Asiimov', 'Wildfire', 'Hyper Beast', 'Electric Hive', 'Fever Dream', 'Neo-Noir', 'Man-o\'-war', 'BOOM', 'Sun in Leo', 'Lightning Strike', 'Mortis', 'Atheris'],
  'USP-S': ['Kill Confirmed', 'Orion', 'Neo-Noir', 'Cortex', 'Caiman', 'Blueprint', 'Cyrex', 'The Traitor', 'Guardian', 'Stainless', 'Monster Mashup', 'Printstream'],
  'Glock-18': ['Fade', 'Water Elemental', 'Bunsen Burner', 'Wasteland Rebel', 'Bullet Queen', 'Vogue', 'Reactor', 'Twilight Galaxy', 'Synth Leaf', 'Oxide Blaze', 'Moonrise'],
  'Desert Eagle': ['Blaze', 'Hand Cannon', 'Cobalt Disruption', 'Code Red', 'Golden Koi', 'Sunset Storm', 'Trigger Discipline', 'Bronze Deco', 'Conspiracy', 'Night Heist', 'Printstream', 'Kumicho Dragon'],
  'MP9': ['Wild Lily', 'Hydra', 'Rose Iron', 'Airlock', 'Hypnotic', 'Setting Sun', 'Sandstorm'],
  'MAC-10': ['Neon Rider', 'Propaganda', 'Sakkaku', 'Bronze', 'Aloha', 'Gold Brick', 'Heat'],
  'SG 553': ['Integrale', 'Colony IV', 'Hyper Beast', 'Hazard Pay', 'Tiger Moth'],
  'FAMAS': ['Eye of Athena', 'Mecha Warrior', 'Neural Net', 'Sundown', 'Afterimage'],
  'Galil AR': ['Chromatic Aberration', 'Akoben', 'Connexion', 'Stone Cold', 'Phoenix Blacklight'],
  'Scout': ['Asiimov', 'Hyper Beast', 'Cyrex', 'Contractor', 'Abyss', 'Blood in the Water'],
  'P90': ['Asiimov', 'Death by Kitty', 'Shallow Grave', 'Chopper', 'Emerald Dragon', 'Virus'],
  'Nova': ['Hyper Beast', 'Koi', 'Antique', 'Bloomstick', 'Exo'],
  'XM1014': ['Zombie Offensive', 'Tranquility', 'Blue Steel', 'Seasons'],
  'Karambit': ['Fade', 'Doppler', 'Marble Fade', 'Tiger Tooth', 'Gamma Doppler', 'Lore', 'Freehand', 'Autotronic', 'Black Laminate', 'Slaughter', 'Crimson Web', 'Ultraviolet'],
  'Butterfly Knife': ['Fade', 'Marble Fade', 'Tiger Tooth', 'Doppler', 'Crimson Web', 'Damascus Steel', 'Lore', 'Autotronic'],
  'Bayonet': ['Fade', 'Marble Fade', 'Tiger Tooth', 'Doppler', 'Autotronic', 'Night', 'Safari Mesh'],
  'Flip Knife': ['Fade', 'Marble Fade', 'Tiger Tooth', 'Slaughter', 'Doppler', 'Ultraviolet'],
  'M9 Bayonet': ['Fade', 'Marble Fade', 'Tiger Tooth', 'Doppler', 'Lore', 'Freehand', 'Slaughter'],
};

const collections: string[] = [
  'Recoil Collection', 'Dreams & Nightmares', 'The Fracture Collection', 'The Snakebite Collection',
  'The Prisma 2 Collection', 'The CS20 Collection', 'The Shattered Web Collection', 'The Danger Zone Collection',
  'The Horizon Collection', 'The Clutch Collection', 'The Operation Hydra Collection', 'The Glove Collection',
  'The Gamma Collection', 'The Chroma 3 Collection', 'The Wildfire Collection',
];

// Real CS:GO/CS2 skin images from Steam CDN — verified working icon hashes
// fetched from steamcommunity.com/market API on 2026-02-24
// Full URL = STEAM_CDN + '/' + hash + '/360fx360f'
const skinImageMap: Record<string, string> = {
  // AK-47 (15 skins)
  'AK-47|Asiimov': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F7teVgWiT9x01x623cmd2rcXKQbw4oA8dzReEK5EK6kNO2NOO04FeIjYJCmyr4jzQJsHiu1I77Gg',
  'AK-47|Redline': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzOtyufRkASq2lkxx4W-HnNyqJC3FZwYoC5p0Q7FfthW6wdWxPu-371Pdit5HnyXgznQeHYY5wyA',
  'AK-47|Fire Serpent': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0PSneqF-JeKDC2mE_u995LZWTTuygxIYvjiBk5r0bymVZwIoWZJ1QLEDs0O6ktayZr6ztFeIjYxAyyX-jH8b5y5vt-wDB_Y7uvqAHvjgL6w',
  'AK-47|Vulcan': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSMuWRDGKC_uNztOh8QmeylBh1426Gz437JyrEOA5zD5N0Q-MOsEG4moe2Yrjr5w2Pid8Rnir3kGoXuUSY1H7U',
  'AK-47|Hydroponic': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNW0PCvZaZiL8-ZG2mXzetJuORoWTD9k0Qit2SBn9eoJSjCa1chD5F3EOAMtRO_x9WyZO_rtgXXio4Wyi6rizQJsHh9s8Yung',
  'AK-47|The Empress': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSJf2DHGKD0tF7teVgWiT9wR4m52yBm47_d3uQPAVyCpF0QLJYtRSwkYazN-jj4QPbi9oTyH-r2jQJsHgrdiDckw',
  'AK-47|Wild Lotus': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV61-LPGdCliWzeFkse1WQiy3nAgq_T_Tzon_cnnGOgMpXpFwQLECtBW_k9ayMbzisgCIiN5CxC2siiwa6Cp1o7FV456Pn5U',
  'AK-47|Neon Revolution': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6SHGSY2NF7teVgWiT9wU105z-EyNb7JCrEZlMnX5Z0F-cLu0G5w4buZePm7lPej4NDziWv2DQJsHiIOqh8pw',
  'AK-47|Nightwish': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSLvmUBnOHyP1-j-xsSyCmmFMit2nVy434IHLDbwcmWcRzQrYNska_xoDjPuOx5QOPjY4RzC342itM8G81tODLUZAk',
  'AK-47|Case Hardened': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNK0P2nZKFpH_2WCm6FzKAl6bVvGS_mxB9342TWnIqsInuROw5zA5siROYIuxS7xIblZbnr5gWLlcsbmhJu5JU4',
  'AK-47|Fuel Injector': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSM-WDC3WTye9kt-RtcCS2kRQyvnPczdutIHzCPQ52DZV2TbIOshG7ltOyM7vg71GPioMUmHr6iyxJ6C5o_a9cBpypIj3h',
  'AK-47|Panthera onca': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV65sJ-WSHFidxOp_pewnHn-wx0Qk5mrVmderdn2XagQoW8AiRO8K4Be-x9K0ZrjjsQKMg4hMzjK-0H3kfYgSlA',
  'AK-47|Head Shot': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6xoIfSsHW-f1dF-v-1mcCS2kRQyvnPWn9egI3mWbA4kCZJxRbFf5haxwYHuYezntg2Ljt1Mnnr8jngfuHo__a9cBiDIU36L',
  'AK-47|Bloodsport': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSIvycAWOD0eFkpN5lRi67gVN15mmDw9egci_EPFAkDMQlTeZe4EXplNa0Yrvr5wbd345GyHioiC4b8G81tFuqg_k_',
  'AK-47|Legion of Anubis': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIf6GDG6D_uNztOh8QmfilEojtW2AmNaodS6RaQMnXpQjTLQJtBLtxNXhZO-0slDX344UmXn2kGoXucROEi-9',
  // M4A4 (12 skins)
  'M4A4|Howl': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afVSKP-EAm6extF7teVgWiT9wh5_5zyAwo6oeSrDawUkCMN0QbEM5BO-wNazMe3qsgHZg4wQyy-t2jQJsHi3nDJ37A',
  'M4A4|Asiimov': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6V6V-Kf2cGFiYxO9gqa9rS37lzBwi6mzRwt-odnufbwAlC8BwR-4JshPuwNbvMbnm4lTdj48X02yg2fuRiYv5',
  'M4A4|Dragon King': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSIf6QC3SE0-96j-xsSyCmmFNytmrRmNz8JXzCbwUmXJN4R7YNskLuwdexNO3k5lfago5DmXn4hiwc8G81tMXFlsCz',
  'M4A4|The Emperor': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6afBSJf2DC3Wf09F7teVgWiT9kEtxsW_dntepcn2SZgF1CcN3RORe4RTtlN2yYenh7wPXiYxDmS_22jQJsHjOUN0CaQ',
  'M4A4|Poseidon': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0OKhe6FkJP-dMWuZxuZi_uM9Sn23xkx_sG3VyNyqcnnFZgchDMYjQuMJtRHuw9PvZuPjtlCI3d9bjXKpHL2aoaM',
  'M4A4|Evil Daimyo': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJeaaAliUwOd7qe5WQyC0nQlp4GqGz42ucCqXaQMhDpd4R-AIsxK6ktXgZePltVPXitoRn3-tjCgd6zErvbijVJZd2Q',
  'M4A4|In Living Color': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSLP-FC1idxOp_pewnTS2xl0gk5WjSztqreX3EOgYnCcN1EOQK5xK6k4HjPumz4VPW2dhAmzK-0H1CdgX2Fw',
  'M4A4|Desolate Space': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJPWAAWuR1etJo_FoTCyMmRQguynLnNepJXPEaQJyDZJ0QOdbsxi7ktS0Y-Li4ADegthGn32ojCJJ7CxosfFCD_SyjfEkHg',
  'M4A4|Radiation Hazard': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFL0Py7Y6F-NOKaHmKvzvx3vuZscCS2kRQyvnPVzor_dn_GbwYlXMF0ROQL5BG7ldW0Mb_g41GIi4MQniv8hyhKv3o-_a9cBkn1A8-C',
  'M4A4|Griffin': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJ-KaCGGZz9F6ueZhW2e2zERysm3Umdesd3rGald1DpRyQLVbtUa5mtPvYuzrtATeg95EmS2vkGoXuZ5UWeP5',
  'M4A4|Spider Lily': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiVI0P_6V6JhL-eWHHSvzOtyufRkASzllE0h5TvXn4v6dHLGPw4kXJoiEOVcsxG4wIG0Nbu371TX2oMTxXjgznQej8mgNU4',
  'M4A4|Cyber Security': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSI-mRC3WA1OB9j-xsSyCmmFN_5Tvdm9ypcXnGPQ8iXMYjF7EM50a8wdKzMOLntFfb3d5BnnmriH9N8G81tGbS0tGU',
  // M4A1-S (12 skins)
  'M4A1-S|Hyper Beast': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9JuPh5SjuMlxgmoCm6l4r9KD7KcA50WcR0R7NctBm_k9fgN7nn4FGMitpCxH-vjikc6Cs4t-5TVaMgr_bJz1aWEz9VGgc',
  'M4A1-S|Decimator': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JtORqRiSygRI1jDGMnYftb3iUb1dxW5ImFLNftxCxktflZLm2tgaP2otGyn_-hytOvy9q5elQV_A7uvqA6CRSoZY',
  'M4A1-S|Golden Coil': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj_JnTiK2lxQztgKClYP9HibCOl9lV4wiRuACuxfrkoXiNL_i4VDXjIgTxSr43X4f7ik457wAWfAjrKTRjgHGL_RjtqbVPGVJ',
  'M4A1-S|Welcome to the Jungle': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9Jo-9oRCyMnRgmpSTLy9igc3PDbVcnDZd3R-de5hHpl4CxZO6z4gLWjt5Dzyv8iCJA6C5j5vFCD_ThScH7Ig',
  'M4A1-S|Nightmare': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj-9gSCGnmBw1tgKJk4jxNWXCbAUpXpp0FrYPthC7k4fnZOm04laMjYxHn3r52HxJ6i065e0FVKV05OSJ2IHiKyzQ',
  'M4A1-S|Master Piece': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL87o956RiW2mx4ijDCAnobsLGWUOwUoCMN2RrUL5hHrxN3gZu7ltFeM3dkUmy__jS1A7i9o6rxTV_Ys5OSJ2LuWmDvh',
  'M4A1-S|Basilisk': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GCMWrEwL9lj-NoXCC_nA4sjDGMnYftbyqVPwUiX5V5ReUDuxC5m9zmNOPktAHYiIgXzSz43C4a7Sg_6uZQVKU7uvqA7bOYRbA',
  'M4A1-S|Cyrex': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1vouRxcCS2kRQyvnPdmN-tJXmXbAJyApIlF7JcsRO6xNDnZLvisQzd3d1Fmyyr3Cwf6io6_a9cBmchrxE-',
  'M4A1-S|Mecha Industries': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JveRqRyiMnBMjpi6RiIb8MhTKN1F4TowiE7EMtRW7ltzlMbvi5wPej4pDmCT2i3tKuHo4sOoEWKFz8qPS3F7BL_Rjtn0I4s52',
  "M4A1-S|Chantico's Fire": 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_JmWiWnlBYioQKIn4vwNCaJaAUmX8AjRuFb5BO-xNzvMb-34FbYg41HxC7-3C1LuCo_4ulUVPAnrLqX0V_9LjFL0A',
  'M4A1-S|Imminent Danger': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JpuR7WyC0miIvtjyTg8GseHyWOgAkCsd4E-IC5BS_wNLnNLjq5ALZgo5HzHn4hi4bvy1s6rwCT-N7rdYWeUp4',
  'M4A1-S|Hot Rod': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_GdMXWVxdF75OA4XBa_nBovp3PXyt2uJ32QaQciDZUhReUM5hLskdy2Pu_n4wLe2doXm3j-2i5A7X5i_a9cBuWkb97d',
  // AWP (11 skins)
  'AWP|Dragon Lore': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk4veqYaF7IfysCnWRxuF4j-B-Xxa-kBkupjDLw96pcX6TZg5yCZJ5TbNZtxjtwNS2NemztgDbidoQyH-sjCga6no-6_FCD_QEyQmfGQ',
  'AWP|Medusa': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk4veqfbdsH_GEHlidxOp_pewnTXDnw0txtmnWzNaud3yVagAnDcdyTbVbtxC5xIG0MLnr5gSKiYxCyDK-0H2qCF8g5Q',
  'AWP|Asiimov': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFiYxO9gqa9sSS_mwR4h4D6Az9ardyqQa1NyDpIkTOBb5ES7wYDiMOyz4lPf2YsX02yg2Ubsh123',
  'AWP|Wildfire': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7NkLPSVB3WV_uNztOh8Qmflw0pysWWBy9n8Iy6fZg5xDJB2R-UKsEO_xobhYezg41Tf3t4XxH_5kGoXueNKmvzb',
  'AWP|Hyper Beast': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6x0MPWBMWWVwP1ij-xsSyCmmFMj62Tcwt-gJC_BbwNyDZokQu8I4BK6wdazMuq35AbW3YIWmy_4h3tO8G81tKCz9TDP',
  'AWP|Electric Hive': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk5_u4bZtgJfSaG2rex7l04LJtSS22xRhztT-EyN2uc3ORbwIhDcR5Qe8PsEOxwYHnZLyz4Rue1dzPPom09Q',
  'AWP|Fever Dream': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7R-OfObAXeR1eZJvOhuRz39kE1w4jiAzNiod3qTOgcgXpAlQ-ML5hjqxtHjZOrrtlHWit9EyCj9iDQJsHhCZP-wUg',
  'AWP|Neo-Noir': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6poL_6cB3WvzedxuPUnHirrxR4l423SyI39I3KXPwdxWZclQeNZ5EXskYfnNeyw71OMi9lNzDK-0H3r66pOTw',
  "AWP|Man-o'-war": 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_C9k7uW-V6NhL-KKMWuZxuZi_uM5HXG3xhh_t2iBnI2ucn3EZwEjDpJ0Q-dY5EPrxNTiYevj7gXa2IhbjXKpQIFOiXU',
  'AWP|BOOM': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk7f6vZZt-Kf2DAmKvzedxuPUnTX7mkxhy62iDzYqhdiqXbw4oWZEkE-IDsRa9lIXlMejktFOMi49MmDK-0H2AgUnw_w',
  'AWP|Sun in Leo': 'i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf9Ttk9f2qYaVucs-fB2CY1aAnteVqHCzgkRsh4TnXyY2vIH-QaVcpA5F3TOdct0S_wNO0Zri05wbXlcsbmn9hB4gb',
};

const STEAM_CDN = 'https://community.akamai.steamstatic.com/economy/image';

function getImageUrl(weapon: string, skin: string): string {
  const key = `${weapon}|${skin}`;
  const hash = skinImageMap[key];
  if (hash) {
    return `${STEAM_CDN}/${hash}/360fx360f`;
  }
  // Fallback for skins without a mapped image
  const encodedWeapon = encodeURIComponent(weapon.toLowerCase().replace(/\s/g, '_').replace(/[^a-z0-9_]/g, ''));
  const encodedSkin = encodeURIComponent(skin.toLowerCase().replace(/\s/g, '_').replace(/[^a-z0-9_]/g, ''));
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${encodedWeapon}_${encodedSkin}&backgroundColor=252540,1f1f3a,16213e`;
}

function generatePriceHistory(basePrice: number): { date: string; price: number }[] {
  const history = [];
  const now = new Date();
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const variance = (Math.random() - 0.5) * 0.3;
    history.push({
      date: date.toISOString().split('T')[0],
      price: Math.max(0.1, basePrice * (1 + variance)),
    });
  }
  return history;
}

function getRarityPrice(rarity: Rarity, isKnife: boolean): number {
  if (isKnife) {
    const ranges: Record<Rarity, [number, number]> = {
      'Consumer': [50, 100],
      'Industrial': [80, 200],
      'Mil-Spec': [150, 500],
      'Restricted': [300, 1000],
      'Classified': [500, 3000],
      'Covert': [1000, 10000],
      'Contraband': [5000, 50000],
    };
    const [min, max] = ranges[rarity];
    return Math.round((Math.random() * (max - min) + min) * 100) / 100;
  }
  const ranges: Record<Rarity, [number, number]> = {
    'Consumer': [0.5, 5],
    'Industrial': [2, 15],
    'Mil-Spec': [5, 50],
    'Restricted': [15, 200],
    'Classified': [50, 800],
    'Covert': [100, 5000],
    'Contraband': [2000, 50000],
  };
  const [min, max] = ranges[rarity];
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

const knifeWeapons: Weapon[] = ['Karambit', 'Butterfly Knife', 'Bayonet', 'Flip Knife', 'M9 Bayonet'];

let idCounter = 1;

function generateProduct(
  weapon: Weapon,
  skinName: string,
  quality: Quality,
  rarity: Rarity,
): Product {
  const isKnife = knifeWeapons.includes(weapon);
  const price = getRarityPrice(rarity, isKnife);
  const hasDiscount = Math.random() < 0.15;
  const discount = hasDiscount ? Math.floor(Math.random() * 21 + 10) : undefined;
  const originalPrice = hasDiscount ? Math.round(price / (1 - (discount! / 100)) * 100) / 100 : undefined;
  const isStatTrak = !isKnife && Math.random() < 0.2;
  const floatMin = quality === 'FN' ? 0 : quality === 'MW' ? 0.07 : quality === 'FT' ? 0.15 : quality === 'WW' ? 0.38 : 0.45;
  const floatMax = quality === 'FN' ? 0.07 : quality === 'MW' ? 0.15 : quality === 'FT' ? 0.38 : quality === 'WW' ? 0.45 : 1.0;
  const float = Math.round((Math.random() * (floatMax - floatMin) + floatMin) * 10000) / 10000;
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 60);
  const createdAt = new Date(now.setDate(now.getDate() - daysAgo)).toISOString();

  return {
    id: `product-${idCounter++}`,
    name: skinName,
    weapon,
    quality,
    float,
    price,
    originalPrice,
    image: getImageUrl(weapon, skinName),
    statTrak: isStatTrak,
    rarity,
    inStock: Math.random() > 0.05,
    discount,
    collection: collections[Math.floor(Math.random() * collections.length)],
    priceHistory: generatePriceHistory(price),
    views: Math.floor(Math.random() * 5000 + 100),
    createdAt,
    isNew: daysAgo < 7,
    isPopular: Math.random() < 0.15,
  };
}

function generateAllProducts(): Product[] {
  const products: Product[] = [];

  const weaponRarityMap: Record<Weapon, Rarity> = {
    'AK-47': 'Classified',
    'M4A4': 'Covert',
    'M4A1-S': 'Covert',
    'AWP': 'Covert',
    'USP-S': 'Classified',
    'Glock-18': 'Restricted',
    'Desert Eagle': 'Restricted',
    'MP9': 'Restricted',
    'MAC-10': 'Mil-Spec',
    'SG 553': 'Classified',
    'FAMAS': 'Mil-Spec',
    'Galil AR': 'Mil-Spec',
    'Scout': 'Classified',
    'P90': 'Classified',
    'Nova': 'Mil-Spec',
    'XM1014': 'Industrial',
    'Karambit': 'Covert',
    'Butterfly Knife': 'Covert',
    'Bayonet': 'Covert',
    'Flip Knife': 'Covert',
    'M9 Bayonet': 'Covert',
  };

  for (const weapon of weapons) {
    const skins = skinNames[weapon] || ['Default'];
    const baseRarity = weaponRarityMap[weapon];
    const rarityIndex = rarities.indexOf(baseRarity);

    for (const skin of skins) {
      for (const quality of qualities) {
        const rarity = rarities[Math.max(0, rarityIndex + Math.floor(Math.random() * 2 - 1))] as Rarity;
        products.push(generateProduct(weapon, skin, quality, rarity));
        if (products.length >= 250) break;
      }
      if (products.length >= 250) break;
    }
    if (products.length >= 250) break;
  }

  return products;
}

export const mockProducts: Product[] = generateAllProducts();

// Ensure we have at least 200 products
export const allProducts = mockProducts;

export const popularProducts = mockProducts.filter(p => p.isPopular).slice(0, 12);
export const newProducts = mockProducts.filter(p => p.isNew).slice(0, 8);
export const featuredProduct = mockProducts.find(p => p.rarity === 'Covert' && p.price > 1000) || mockProducts[0];
