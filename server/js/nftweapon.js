const Formulas = require('./formulas.js');
const dao = require('./dao.js');


class NFTWeapon {
    constructor(walletId, nftId) {
        console.log("Creating NFTWeapon: ", nftId, walletId);
        this.nftId = nftId.replace("NFT_", "0x");
        this.walletId = walletId;
        this.trait = undefined;
        this.experience = undefined;
        this.level = undefined;
    }

    async loadWeaponData() {
        const response = await dao.loadNFTWeapon(this.walletId, this.nftId);
        this.experience = response.experience;
        this.trait = response.trait;
        if (!this.trait) {
            await this.#setTraitInServer();
        }
        this.level = Formulas.level(this.experience);
    }

    async #setTraitInServer() {
        try {
            const trait = await dao.saveNFTWeaponTrait(this.walletId, this.nftId);
            console.log("Got trait: ", trait, this.walletId, this.nftId);
            this.trait = trait;
        } catch (error) {
            console.error(error);
        }
    }

    isTraitActive() {
        let chance = Math.floor(Math.random() * 100);
        chance += this.level;
        return chance >= 89; // base level is 1, so base chance of trait is 10%
    }

    async incrementExperience(damageDealt) {
        try {
            const updatedExperience = await dao.saveNFTWeaponExperience(this.walletId, this.nftId, damageDealt);
            this.experience = updatedExperience;
            this.level = Formulas.level(updatedExperience);
        } catch(error) {
            console.error(error);
        }
    }

    getLevel() {
        return this.level;
    }
    
    getTrait() {
        return this.trait;
    }
}

exports.NFTWeapon = NFTWeapon;