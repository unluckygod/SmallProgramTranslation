/**
 * 内存栈
 *  将数据放入缓存中，在下次进行取出操作时将过期的数据回收
 * 
 *  堆模式：
 *    按照时间点进行叠加数据，从最早(开头)的数据开始取
 *    取到过期数据则回收，取到非过期数据则停止回收工作
 * 
 *  读取数据：
 *    数据将重置过期时间，且移入缓存区末尾
 * 
 *  写入数据：
 *    数据将插入缓存区末尾，如之前使用过则移动至末尾
 */


 /**
  * 开启DEBUG模式
  */
  const DEBUG = true;

  /**
   * 过期时间[1H]
   */
  const TIME_OUT = 60 * 60 * 1000;

  /**
   * 最大缓存数
   *  当缓存数超过指定数额，无论是否过期都将回收最早当缓存数据
   */
  const MAX_CACHE = 30;


module.exports = () => {

  /**
   * 缓存区
   */
  const __CACHE__ = [];


  return {
    /**
     * 读取缓存
     */
    readCache(key) {
      // sad
      return __CACHE__[key] || {};
    },

    /**
     * 写入缓存
     */
    writeCache(key, data) {
      __CACHE__[key] = data;
    }
  }
}