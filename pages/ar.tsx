import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import useSwr from 'swr';
import { useState } from 'react';


export default function Home() {

  return (
    <>
      <div>
        <div className="bg-cover bg-no-repeat bg-right" style={{ backgroundImage: `url("/images/laptop22.jpg")` }}>
          <div className='bg-gradient-to-r to-indigo-400/40 from-indigo-900'>
            <Link href="/" passHref={true}>
              <div className='flex justify-center items-center pt-4'>
                <img className='h-14 w-14 rounded-full' src="/images/Awaeelogo.jpg" alt="" />
              </div>
            </Link>
          </div>
          <div className="2xl:h-[calc(100vh_-_14rem)] md:h-[calc(100vh_-_2rem)]  md:flex items-center relative">
            <div className="2xl:w-4/6 xl:w-5/6 w-11/12 mx-auto flex md:flex-row flex-col-reverse  md:items-center py-10 ">
              {/* text section */}

              <div className="space-y-6 w-full text-center ">
                <h1 className="uppercase text-white xl:text-5xl xl:leading-[4rem] text-2xl font-semibold border-b py-3">تحسين الثقافة الأمنية <br /> للعرب</h1>
                <p className="lg:text-base font-medium text-white text-center">  تطوير الأمن للأفراد والمؤسسات</p>

                <div className="flex justify-center space-x-4">
                  <Link href="/ar" passHref={true}>
                    <span className="capitalize cursor-pointer px-8 py-3 text-lg  text-black font-medium bg-[#e48d00] lg:w-auto w-full block text-center md:mt-0 mt-4">
                      احجز عرضًا توضيحيًا
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="bg-[#161616] py-20">
          <section className="2xl:w-4/6 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="space-y-4 p-6">
              <div className='border-b border-[#898989]'>
                <h1 className="text-left text-xl font-semibold capitalize text-[#fff] py-3">خدمات</h1>
              </div>
            </div>
            <div className=" space-y-4 ">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 px-4 md:divide-x divide-white/10  ">
              <div className='px-6 py-8'>
                  <h1 className='text-2xl text-[#e48d00] font-normal'>الأمن السيبراني العربي
                    التدريب على الإدراك</h1>
                  <p className='text-sm text-[#fff] py-4'>توعية موظفي الأمن السيبراني
                    التدريب باللغة العربية ونحن
                    تقدم عبر الإنترنت وفي الموقع
                    دورات تدريبية حول الخصوصية و
                    الأمن السيبراني لمساعدة الأعمال
                    الحماية من التهديدات السيبرانية</p>
                  <p className='text-sm text-[#fff] '> - تقدم المسار </p>
                  <p className='text-sm text-[#fff] '>- التقارير في الوقت الحقيقي</p>
                </div>
                <div>
                  <h1 className='text-xl text-[#f5a225] font-semibold'>التدريب على السلامة الإلكترونية لـ
                    <br /> المدارس العربية</h1>
                  <p className='text-sm text-[#fff] py-4'>قابل للتخصيص
                    الموارد والممارسة ل
                    المدارس والمعلمين وأولياء الأمور
                    الحفاظ على سلامة الطلاب على
                    إنترنت.</p>
                  <p className='text-sm text-[#fff] '> - التدريب عبر الإنترنت وفي الموقع </p>
                  <p className='text-sm text-[#fff] '>- أكثر من 50 مقطع فيديو ومسابقات   </p>

                </div>
                <div>
                  <h1 className='text-xl text-[#f5a225] font-semibold'>المسح الإلكتروني</h1>
                  <p className='text-sm text-[#fff] py-4'>أداة اختبار تجعل من السهل
                    أنظمة الفحص والتحليل</p>
                  <p className='text-sm text-[#fff] '> - أنظمة المسح والمراقبة </p>
                  <p className='text-sm text-[#fff] '>- تحليل سلوك المستخدم</p>

                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#f5a225] py-20">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            <div className="space-y-4 p-6">
              <div className='border-b border-black'>
                <h1 className="text-left text-2xl font-bold capitalize text-[#000000]">الحساب</h1>
              </div>
            </div>
            <div className=" space-y-4 py-8">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-10 ">
                <div className=''>
                  <h1 className='text-xl text-[#000000] font-semibold'>مستخدم المؤسسة</h1>
                  <p className='text-sm text-[#000000] py-4'>ليس لديك حساب؟ سجل هنا</p>
                  <div className='flex justify-start'>
                    <Link href="/button" passHref={true}>
                      <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-white font-medium bg-[#000000] lg:w-auto w-full block text-center md:mt-0 mt-4">
                        استمر
                      </span>
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className='text-xl text-[#000000] font-semibold'>مستخدم المدرسة</h1>
                  <p className='text-sm text-[#000000] py-4'>ليس لديك حساب؟ سجل هنا</p>
                  <div className='flex justify-start'>
                    <Link href="/button" passHref={true}>
                      <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-white font-medium bg-[#000000] lg:w-auto w-full block text-center md:mt-0 mt-4">
                        استمر
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#fff] py-20">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            <div className="space-y-4 p-6">
              <div className='border-b border-black'>
                <h1 className="text-left text-2xl font-bold capitalize text-[#000000]">التسعير</h1>
              </div>
            </div>
            <div className=" space-y-4 py-8">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 px-10 ">
                <div className=''>
                  <h1 className='text-xl text-[#f5a225] font-semibold'>مَشرُوع</h1>
                  <p className='text-sm text-[#555] py-4'>24.99 جنيهًا إسترلينيًا لكل مستخدم في السنة</p>
                  <div className='flex justify-start'>
                    <Link href="/button" passHref={true}>
                      <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-white font-medium bg-[#f5a225] lg:w-auto w-full block text-center md:mt-0 mt-4">
                        مبيعات الاتصال
                      </span>
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className='text-xl text-[#f5a225] font-semibold'>مدرسة</h1>
                  <p className='text-sm text-[#555] py-4'>9.99 جنيهًا إسترلينيًا لكل مستخدم في السنة</p>
                  <div className='flex justify-start'>
                    <Link href="/button" passHref={true}>
                      <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-white font-medium bg-[#f5a225] lg:w-auto w-full block text-center md:mt-0 mt-4">
                        مبيعات الاتصال
                      </span>
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className='text-xl text-[#f5a225] font-semibold'>المسح الإلكتروني</h1>
                  <p className='text-sm text-[#555] py-4'>99.99 جنيهًا إسترلينيًا لكل جلسة / شهر</p>
                  <div className='flex justify-start'>
                    <Link href="/button" passHref={true}>
                      <span className="capitalize cursor-pointer px-6 md:py-2 py-3 text-xs  text-white font-medium bg-[#f5a225] lg:w-auto w-full block text-center md:mt-0 mt-4">
                        مبيعات الاتصال
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-black py-20">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            <div className="space-y-4 p-6">
              <div className='border-b border-white'>
                <h1 className="text-left text-2xl font-bold capitalize text-[#fff]">معلومات عنا</h1>
              </div>
            </div>
            <div className=" space-y-4 py-8">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-8">
                <div className='col-span-4'>
                  <h1 className='text-xl text-[#fff] font-semibold'>الخبرة الفنية</h1>
                  <p className='text-sm text-[#fff] py-4'>نحن على دراية جيدة بمجموعة متنوعة من التدريبات والماسح الأمني ومراقبة البيانات والتدقيق. نحن نعمل مع أي أمان إلكتروني وخصوصية تقريبًا قد تواجهها شركة صغيرة. نستخدم هذه الخبرة لمساعدة العملاء في المشاريع الصغيرة والمتوسطة الحجم.</p>

                </div>
                <div className='col-span-2'>
                  <h1 className='text-xl text-[#fff] font-semibold'>عائد استثمار مرتفع</h1>
                  <p className='text-sm text-[#fff] py-4'>هل تنفق معظم ميزانيتك الخاصة بالأمن السيبراني وتكنولوجيا المعلومات على الحفاظ على نظامك الحالي؟ تجد العديد من الشركات أن الصيانة المستمرة تستهلك ميزانيتها للتكنولوجيا الجديدة. باستخدام خدماتنا ، يمكننا مساعدتك على تحسين الأمن السيبراني والخصوصية لمؤسستك ويمكنك التركيز على ما تفعله بشكل أفضل - إدارة عملك.</p>

                </div>
                <div className='col-span-2'>
                  <h1 className='text-xl text-[#fff] font-semibold'>الرضا مضمون</h1>
                  <p className='text-sm text-[#fff] py-4'>يمكن أن يكون عالم الأمن السيبراني والخصوصية سريع الخطى ومخيفًا. لهذا السبب هدفنا هو تقديم تجربة مصممة خصيصًا لاحتياجات مؤسستك. بغض النظر عن الميزانية ، نحن نفخر بأنفسنا لتقديم خدمة عملاء احترافية. نحن نضمن لك أن تكون راضيا عن عملنا</p>

                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='bg-[#f5a225]'>
          <section className='2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto py-10 '>

            <div className='flex flex-col md:flex-row'>
              <div className=" block p-6 bg-[#f5a225] max-w-md">
                <div className='py-2'>
                  <h1>ترك لنا خطا!</h1>
                </div>
                <form>
                  <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-[#f5a225] bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-black focus:bg-[#f5a225] focus:outline-none placeholder-black" placeholder="الاسم الكامل أو اسم الشركة" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-[#f5a225] bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-black focus:bg-[#f5a225] focus:outline-none placeholder-black" placeholder="بريد إلكتروني*" />
                  </div>
                  <div className="form-group mb-6">
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-[#f5a225] bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-black focus:bg-[#f5a225] focus:outline-none placeholder-black" placeholder="رقم التليفون*" />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-[#f5a225] bg-clip-padding border border-solid border-black rounded transition ease-in-out m-0 focus:text-black focus:bg-[#f5a225] focus:outline-none placeholder-black"
                      placeholder="رسالة"
                    ></textarea>
                  </div>
                  <div className="form-group form-check text-left mb-6">
                    <input type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-[#f5a225] checked:bg-[#f5a225] checked:border-[#000000] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer placeholder-black"
                      checked />
                    <label className="text-xs text-gray-800">اشترك في قائمة البريد الإلكتروني الخاصة بنا للحصول على التحديثات والعروض الترويجية والمزيد.</label>
                  </div>
                  <button type="submit" className=" w-full px-6 py-2.5 bg-black text-[#f5a225] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blackhover:shadow-lg focus:bg-blackfocus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">يرسل</button>
                </form>
                <div className='py-3 text-xs'>
                  <h1>هذا الموقع محمي بواسطة reCAPTCHA وتطبق سياسة الخصوصية وشروط الخدمة من Google.</h1>
                </div>
              </div>
              <div className='block p-6 bg-[#f5a225] space-y-6 max-w-md'>
                <h1 className='text-lg'>الوعي</h1>
                <p className='text-xs'>ساحة برايفورد ، برج هامليتس ، لندن ، E1 0SG ، المملكة المتحدة</p>
                <p className='text-xs'>موقع المكتب: لندن - المملكة المتحدة </p>
                <p className='text-xs'>البريد الإلكتروني: office@alwaee.com</p>
              </div>
            </div>
          </section>
        </div>


        <div className='flex justify-end items-center bottom-8 p-4 right-0 fixed'>
          <div className="flex justify-center">
            <div className="block  rounded-lg shadow-lg bg-[#f5a225] max-w-sm p-6">
            <h5 className="text-gray-900 text-md leading-tight font-medium mb-2">هذا الموقع يستخدم الكوكيز.</h5>
              <p className="text-gray-900 text-xs mb-4">
                نحن نستخدم ملفات تعريف الارتباط لتحليل حركة المرور على الموقع
                وتحسين تجربة موقع الويب الخاص بك. بواسطة
                بقبول استخدامنا لملفات تعريف الارتباط ، ستفعل بياناتك
                يتم تجميعها مع جميع بيانات المستخدم الأخرى
              </p>
              <div className='space-x-6'>
                <button type="button" className=" inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out">انخفاض</button>
                <button type="button" className=" inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase transition duration-150 ease-in-ou">قبول</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f5a225]">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            <div className='py-10'>
              <button type="submit" className=" w-40 px-6 py-2.5 bg-black text-[#fff] font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blackhover:shadow-lg focus:bg-blackfocus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">احصل على اتجاه</button>
            </div>

          </section>
          <div className='pt-36'>
            <div className='flex justify-center items-end py-3'>
              <a href="https://twitter.com/Alwaee2" target="_blank" rel="noreferrer"
                className="bg-[#1E2833] rounded-full  w-10 h-10 flex items-center justify-center cursor-pointer text-white trasition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                  className="w-4 h-4">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}
