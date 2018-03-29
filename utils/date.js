Date.prototype.hm = function() {
  const h = this.getHours()
  const m = this.getMinutes()
  return `${h}:${m}`
};

module.exports = Date;