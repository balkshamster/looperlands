define(function() {

    var Storage = Class.extend({
        init: function(sessionId){
            this.sessionId = sessionId;
        },
        saveWorker: new Worker("js/saveworker.js"),
        dirty: false,
        loadData: async function() {
            console.log("Loading data");
            let response = await axios.get(`/session/${this.sessionId}`);
            this.data = response.data;
            this.nftId = this.data.nftId;
            this.walletId = this.data.walletId;

            _this = this;
            setInterval(function() {
                if (_this.dirty === true) {
                    _this.data['sessionId'] = _this.sessionId;
                    _this.saveWorker.postMessage(_this.data);
                    _this.dirty = false;
                }
            }, 5000);
        },
        resetData: function() {
            return;
        },
    
        hasLocalStorage: function() {
            return Modernizr.localstorage;
        },
    
        save: function() {
            console.debug("setting dirty");
            this.dirty = true;
        },
    
        clear: function() {
            if(this.hasLocalStorage()) {
                localStorage.data = "";
                this.resetData();
            }
        },
    
        // Player
    
        hasAlreadyPlayed: function() {
            return this.data.hasAlreadyPlayed;
        },
    
        initPlayer: function(name) {
            this.data.hasAlreadyPlayed = true;
            this.setPlayerName(name);
        },
        
        setPlayerName: function(name) {
            this.data.player.name = name.trim();
            this.save();
        },
    
        setPlayerImage: function(img) {
            this.data.player.image = img;
            this.save();
        },

        setPlayerArmor: function(armor) {
            this.data.player.armor = armor;
            this.save();
        },
    
        setPlayerWeapon: function(weapon) {
            this.data.player.weapon = weapon;
            this.save();
        },

        savePlayer: function(img, armor, weapon) {
            this.setPlayerImage(img);
            this.setPlayerArmor(armor);
            this.setPlayerWeapon(weapon);
        },
    
        // Achievements
    
        hasUnlockedAchievement: function(id) {
            return _.include(this.data.achievements.unlocked, id);
        },
    
        unlockAchievement: function(id) {
            if(!this.hasUnlockedAchievement(id)) {
                this.data.achievements.unlocked.push(id);
                this.save();
                return true;
            }
            return false;
        },
    
        getAchievementCount: function() {
            return _.size(this.data.achievements.unlocked);
        },
    
        // Angry rats
        getRatCount: function() {
            return this.data.achievements.ratCount;
        },
    
        incrementRatCount: function() {
            if(this.data.achievements.ratCount < 10) {
                this.data.achievements.ratCount++;
                this.save();
            }
        },
        
        // Skull Collector
        getSkeletonCount: function() {
            return this.data.achievements.skeletonCount;
        },

        incrementSkeletonCount: function() {
            if(this.data.achievements.skeletonCount < 10) {
                this.data.achievements.skeletonCount++;
                this.save();
            }
        },
    
        // Meatshield
        getTotalDamageTaken: function() {
            return this.data.achievements.totalDmg;
        },
    
        addDamage: function(damage) {
            if(this.data.achievements.totalDmg < 5000) {
                this.data.achievements.totalDmg += damage;
                this.save();
            }
        },
        
        // Hunter
        getTotalKills: function() {
            return this.data.achievements.totalKills;
        },

        incrementTotalKills: function() {
            if(this.data.achievements.totalKills < 50) {
                this.data.achievements.totalKills++;
                this.save();
            }
        },
    
        // Still Alive
        getTotalRevives: function() {
            return this.data.achievements.totalRevives;
        },
    
        incrementRevives: function() {
            if(this.data.achievements.totalRevives < 5) {
                this.data.achievements.totalRevives++;
                this.save();
            }
        },
    });
    
    return Storage;
});
