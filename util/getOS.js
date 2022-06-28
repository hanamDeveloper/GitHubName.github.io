export let currentOS;
export const mobileOS = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

if (mobileOS) {
   // 유저에이전트를 불러와서 OS를 구분합니다.
   var userAgent = navigator.userAgent.toLowerCase();
   if (userAgent.search("android") > -1)
      currentOS = "android";
   else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1)
            || (userAgent.search("ipad") > -1))
      currentOS = "ios";

   else
      currentOS = "else";
} else {
   // 모바일이 아닐 때
   console.log('모바일이 아님')
   currentOS = "nomobile";
}
