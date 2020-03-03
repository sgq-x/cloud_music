/**
 * 随机取出数组中的几项
 */
export const getRandomArrayElements = (arr, count) => {
  // eslint-disable-next-line one-var
  let shuffled = arr.slice(0),
    // 克隆一个数组,为了不影响外边的数据
    i = arr.length,
    min = i - count,
    temp,
    index
    // 存下来数组信息,数组的长度
    // 通过改变数组项的位置 输出后边的几位
  while (--i > min) {
    // 随机生成一个索引
    index = Math.floor((i + 1) * Math.random())
    // 将随机索引暂存
    // 将数组后边的项与随机项调换
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(min)
}
