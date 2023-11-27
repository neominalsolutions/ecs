// 1.yöntem
import { sum, division, A } from './07_exports.js';

// 2.yöntem
// dosyadaki tüm değerleri takma bir isim ile dışarı çıkarma as alias anlamında kullanılır
import * as namespace from './07_exports.js';
// C# using kod blogu

sum(4, 5);
division(3, 5);
const a = new A();
a.do();

namespace.sum();
namespace.division();
