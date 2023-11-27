// 1.yöntem
import DateHelper, { sum, division, A } from './07_exports.js';
// import React, {useState,useEffect}  from 'react';

// 2.yöntem
// dosyadaki tüm değerleri takma bir isim ile dışarı çıkarma as alias anlamında kullanılır
import * as f from './07_exports.js';
// C# using kod blogu

const date = DateHelper.getPrettyDate();
console.log('date', date);

// namespace.DateHelper.getPrettyDate();

sum(4, 5);
division(3, 5);
const a = new A();
a.do();

f.sum();
f.division();
