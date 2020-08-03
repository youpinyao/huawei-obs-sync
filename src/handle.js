module.exports = {
  obsDir({ obs, dir }) {
    if (!obs) {
      throw new Error('please config obs path');
    }
    if (!dir) {
      throw new Error('please config dir path');
    }
  }
}
