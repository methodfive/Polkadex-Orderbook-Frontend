import Link from "next/link";

import * as S from "./styles";
import * as T from "./types";

export const Polkadex = ({ size = "medium" }: T.Props) => (
  <Link href="/trading">
    <S.Wrapper size={size}>
      <svg
        width="420"
        height="83"
        viewBox="0 0 420 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <S.Icon>
          <path
            d="M414.072 56.696C415.876 56.6088 417.613 57.3949 418.742 58.8095C419.871 60.2636 420.268 62.158 419.819 63.9448C419.376 65.9838 418.231 67.8015 416.585 69.08C415.034 70.3633 413.087 71.0677 411.076 71.0731C409.312 71.1743 407.603 70.4356 406.466 69.08C405.36 67.6128 405.025 65.702 405.566 63.9448C405.964 61.9318 407.043 60.118 408.62 58.8095C410.115 57.4549 412.056 56.7021 414.072 56.696Z"
            fill="#E6007A"
          />
          <path d="M131.675 54.795H128.499C127.146 54.795 126.176 54.3833 125.587 53.5598C124.999 52.7363 124.852 51.7658 125.146 50.6482C125.323 49.6482 125.852 48.7365 126.734 47.913C127.675 47.0307 128.822 46.5895 130.175 46.5895H133.352L136.616 31.5903C136.91 30.2374 137.557 29.208 138.557 28.5022C139.616 27.7963 140.704 27.4434 141.822 27.4434C142.822 27.4434 143.675 27.7669 144.381 28.414C145.145 29.061 145.38 30.1198 145.086 31.5903L141.822 46.5895H144.998C146.586 46.5895 148.027 46.266 149.321 45.619C150.674 44.972 151.851 44.1485 152.851 43.1485C153.909 42.1486 154.762 41.0016 155.409 39.7075C156.115 38.4135 156.615 37.09 156.909 35.7371C157.145 34.4431 157.203 33.1784 157.086 31.9432C157.027 30.708 156.733 29.5904 156.203 28.5904C155.674 27.5905 154.909 26.7964 153.909 26.2082C152.91 25.5612 151.645 25.2376 150.116 25.2376H133.263C132.146 25.2376 130.969 25.3553 129.734 25.5906C128.558 25.8258 127.411 26.2376 126.293 26.8258C125.234 27.414 124.293 28.1787 123.47 29.1198C122.705 30.0021 122.176 31.1197 121.882 32.4726C121.587 33.8255 121.735 35.0607 122.323 36.1783C122.911 37.2959 123.529 38.2958 124.176 39.1781C125.058 40.1781 125.352 41.2663 125.058 42.4427C124.823 43.5015 124.234 44.4426 123.293 45.2661C122.411 46.0896 121.382 46.5013 120.205 46.5013C119.205 46.5013 118.294 46.1778 117.47 45.5308C115.823 44.0014 114.617 42.1192 113.853 39.884C113.088 37.6488 112.97 35.1783 113.5 32.4726C114.029 30.0021 115 27.8258 116.411 25.9435C117.823 24.0024 119.499 22.3848 121.44 21.0908C123.44 19.7379 125.617 18.738 127.97 18.0909C130.322 17.3851 132.675 17.0322 135.028 17.0322H151.351C154.409 17.0322 156.939 17.591 158.939 18.7085C160.997 19.8261 162.556 21.2967 163.615 23.1201C164.732 24.8847 165.379 26.8846 165.556 29.1198C165.791 31.355 165.674 33.6196 165.203 35.9136C164.674 38.2664 163.791 40.5898 162.556 42.8838C161.321 45.119 159.762 47.1189 157.88 48.8835C156.056 50.6482 153.909 52.0893 151.439 53.2069C148.969 54.2656 146.263 54.795 143.322 54.795H140.145L139.263 58.9419C138.91 60.4124 138.41 61.7947 137.763 63.0887C137.175 64.3828 136.381 65.5298 135.381 66.5298C134.44 67.4709 133.263 68.2356 131.852 68.8238C130.499 69.3531 128.881 69.6178 126.999 69.6178C125.823 69.6178 124.47 69.412 122.94 69.0002C121.47 68.5885 120.323 67.5885 119.499 66.0004C118.97 65.1181 118.794 64.2357 118.97 63.3534C119.264 62.177 119.911 61.2065 120.911 60.4418C121.911 59.6771 122.999 59.2948 124.176 59.2948C125.293 59.2948 126.234 59.7066 126.999 60.53C127.411 61.1182 127.97 61.4124 128.675 61.4124C129.264 61.4124 129.734 61.0888 130.087 60.4418C130.44 59.736 130.852 58.3243 131.322 56.2067L131.675 54.795Z" />
          <path d="M163.459 52.2363C163.988 49.8247 164.93 47.5601 166.282 45.4425C167.635 43.325 169.253 41.4721 171.135 39.884C173.076 38.2958 175.194 37.0312 177.488 36.0901C179.841 35.1489 182.223 34.6784 184.635 34.6784C187.105 34.6784 189.311 35.1489 191.252 36.0901C193.193 37.0312 194.781 38.2958 196.016 39.884C197.252 41.4721 198.104 43.325 198.575 45.4425C199.046 47.5601 199.016 49.8247 198.487 52.2363C197.957 54.648 197.016 56.9126 195.663 59.0301C194.311 61.0888 192.664 62.9123 190.722 64.5004C188.84 66.0886 186.723 67.3532 184.37 68.2944C182.076 69.1767 179.694 69.6178 177.223 69.6178C174.811 69.6178 172.635 69.1767 170.694 68.2944C168.753 67.3532 167.165 66.0886 165.93 64.5004C164.694 62.9123 163.841 61.0888 163.371 59.0301C162.9 56.9126 162.93 54.648 163.459 52.2363ZM190.281 52.2363C190.575 50.9423 190.605 49.707 190.37 48.5306C190.134 47.3542 189.664 46.3249 188.958 45.4425C188.311 44.5602 187.458 43.8838 186.399 43.4132C185.399 42.8838 184.252 42.6191 182.958 42.6191C181.664 42.6191 180.399 42.8838 179.164 43.4132C177.929 43.8838 176.782 44.5602 175.723 45.4425C174.723 46.3249 173.841 47.3542 173.076 48.5306C172.37 49.707 171.87 50.9423 171.576 52.2363C170.988 54.8833 171.4 57.1184 172.812 58.9419C174.223 60.7653 176.253 61.677 178.9 61.677C180.194 61.677 181.458 61.4418 182.693 60.9712C183.929 60.4418 185.046 59.7654 186.046 58.9419C187.105 58.0596 187.987 57.0596 188.693 55.942C189.458 54.7656 189.987 53.5304 190.281 52.2363Z" />
          <path d="M220.9 18.7968C220.724 18.7968 220.577 18.9732 220.459 19.3262C220.4 19.6791 220.312 20.0908 220.194 20.5614L212.077 58.8537C211.959 59.3242 211.842 59.8242 211.724 60.3536C211.607 60.8241 211.489 61.2065 211.371 61.5006C211.959 60.9124 212.518 60.53 213.048 60.3536C213.636 60.1183 214.195 60.0007 214.724 60.0007C215.724 60.0007 216.547 60.3536 217.195 61.0594C217.842 61.7065 218.018 62.5888 217.724 63.7064C217.547 64.6475 217.106 65.5004 216.4 66.2651C215.224 67.6179 213.989 68.5297 212.695 69.0002C211.459 69.412 210.254 69.6178 209.077 69.6178C206.666 69.6178 204.96 68.912 203.96 67.5003C202.96 66.0298 202.783 63.6475 203.43 60.3536L211.901 20.8261C212.312 18.7085 212.842 17.0027 213.489 15.7087C214.136 14.4146 214.871 13.4147 215.695 12.7088C216.577 11.9442 217.577 11.4442 218.694 11.2089C219.871 10.9148 221.194 10.7678 222.665 10.7678H223.371C224.429 10.7678 225.224 11.1795 225.753 12.003C226.341 12.8265 226.518 13.7382 226.282 14.7382C226.106 15.6793 225.547 16.591 224.606 17.4733C223.665 18.3556 222.665 18.7968 221.606 18.7968H220.9Z" />
          <path d="M237.295 62.03C236.766 61.03 236.266 59.8536 235.795 58.5007C235.325 57.1479 235.237 55.7656 235.531 54.3539C235.825 53.1775 236.472 52.2069 237.472 51.4422C238.531 50.6188 239.795 49.7953 241.266 48.9718C242.501 48.2659 243.501 47.4424 244.266 46.5013C245.089 45.5602 245.589 44.7073 245.766 43.9426C245.942 43.0603 245.266 42.6191 243.736 42.6191C242.56 42.6191 241.383 42.8544 240.207 43.325C239.031 43.7956 237.913 44.5308 236.854 45.5308C235.854 46.5307 234.913 47.7954 234.031 49.3247C233.207 50.7952 232.59 52.5598 232.178 54.6186L229.884 65.6474C229.59 67.0003 228.913 68.0003 227.855 68.6473C226.855 69.2943 225.825 69.6178 224.767 69.6178C223.767 69.6178 222.914 69.2943 222.208 68.6473C221.561 68.0003 221.384 67.0003 221.678 65.6474L231.119 21.179C231.531 19.0615 232.06 17.3557 232.707 16.0616C233.354 14.7087 234.09 13.6794 234.913 12.9735C235.795 12.2089 236.795 11.7089 237.913 11.4736C239.031 11.1795 240.325 11.0325 241.795 11.0325H242.589C243.707 11.0325 244.501 11.4442 244.971 12.2677C245.501 13.0912 245.677 14.0029 245.501 15.0028C245.266 15.944 244.707 16.8557 243.824 17.738C243.001 18.5615 242.03 18.9732 240.913 18.9732H240.119C239.942 18.9732 239.795 19.1497 239.678 19.5026C239.619 19.8556 239.531 20.2967 239.413 20.8261L235.354 39.6193C237.119 38.09 238.972 36.8841 240.913 36.0018C242.854 35.1195 244.648 34.6784 246.295 34.6784C248.942 34.6784 251.059 35.4724 252.648 37.0606C254.236 38.6488 254.736 40.7369 254.147 43.325C253.618 45.7955 252.353 48.0895 250.354 50.207C248.412 52.3246 246.177 53.8833 243.648 54.8833C243.824 55.1774 244.089 55.7067 244.442 56.4714C244.795 57.1773 245.148 57.9125 245.501 58.6772C245.913 59.4419 246.324 60.1183 246.736 60.7065C247.148 61.2359 247.53 61.5006 247.883 61.5006C248.354 61.1477 248.883 60.8241 249.471 60.53C250.059 60.1771 250.677 60.0007 251.324 60.0007C252.324 60.0007 253.118 60.3536 253.706 61.0594C254.353 61.7065 254.53 62.5888 254.236 63.7064C254.059 64.6475 253.618 65.5004 252.912 66.2651C252.206 66.9709 251.442 67.5885 250.618 68.1179C249.795 68.5885 248.971 68.9414 248.148 69.1767C247.324 69.4708 246.648 69.6178 246.118 69.6178C244.883 69.6178 243.824 69.412 242.942 69.0002C242.06 68.5297 241.266 67.9414 240.56 67.2356C239.913 66.5297 239.325 65.7357 238.795 64.8534C238.266 63.9122 237.766 62.9711 237.295 62.03Z" />
          <path d="M287.603 58.7654C287.485 59.2948 287.338 59.8536 287.162 60.4418C287.044 60.9712 286.926 61.3535 286.809 61.5888L287.25 61.2359C288.25 60.4712 289.279 60.0889 290.338 60.0889C291.338 60.0889 292.132 60.4418 292.72 61.1477C293.308 61.7947 293.485 62.6476 293.25 63.7064C293.014 64.6475 292.514 65.5592 291.75 66.4415C290.573 67.5591 289.367 68.3826 288.132 68.912C286.956 69.3826 285.809 69.6178 284.691 69.6178C281.338 69.6178 279.397 68.1179 278.868 65.1181C277.339 66.4709 275.662 67.5591 273.839 68.3826C272.015 69.2061 270.074 69.6178 268.016 69.6178C265.78 69.6178 263.928 69.2355 262.457 68.4708C261.045 67.6473 259.957 66.5592 259.192 65.2063C258.428 63.8534 257.987 62.2947 257.869 60.53C257.751 58.7654 257.928 56.8832 258.398 54.8833C258.869 52.5304 259.722 50.1482 260.957 47.7365C262.192 45.3249 263.722 43.1485 265.545 41.2075C267.369 39.2664 269.427 37.7076 271.721 36.5312C274.074 35.296 276.574 34.6784 279.221 34.6784C281.456 34.6784 283.309 35.3254 284.779 36.6194C285.309 35.9724 285.926 35.5018 286.632 35.2077C287.338 34.8548 288.044 34.6784 288.75 34.6784C289.75 34.6784 290.573 35.0313 291.22 35.7371C291.926 36.3842 292.132 37.3841 291.838 38.737L287.603 58.7654ZM277.545 42.6191C276.133 42.6191 274.809 43.0309 273.574 43.8544C272.398 44.6191 271.31 45.619 270.31 46.8542C269.368 48.0307 268.574 49.3247 267.927 50.7364C267.28 52.1481 266.839 53.501 266.604 54.795C266.427 55.6773 266.339 56.5302 266.339 57.3537C266.339 58.1772 266.486 58.9125 266.78 59.5595C267.074 60.2065 267.516 60.7359 268.104 61.1477C268.692 61.5006 269.457 61.677 270.398 61.677C271.692 61.677 272.927 61.3535 274.104 60.7065C275.339 60.0595 276.427 59.2066 277.368 58.1478C278.309 57.089 279.103 55.8832 279.75 54.5303C280.456 53.1775 280.956 51.7952 281.25 50.3835C281.721 48.3248 281.662 46.5307 281.074 45.0014C280.544 43.4132 279.368 42.6191 277.545 42.6191Z" />
          <path d="M327.605 58.8537C327.488 59.3242 327.37 59.8242 327.252 60.3536C327.135 60.8241 327.017 61.2065 326.899 61.5006C327.546 60.9712 328.135 60.6183 328.664 60.4418C329.252 60.2065 329.811 60.0889 330.34 60.0889C331.34 60.0889 332.134 60.4418 332.723 61.1477C333.311 61.7947 333.487 62.6476 333.252 63.7064C333.076 64.471 332.605 65.3827 331.84 66.4415C330.664 67.6768 329.429 68.5297 328.135 69.0002C326.899 69.412 325.752 69.6178 324.694 69.6178C322.811 69.6178 321.341 69.1767 320.282 68.2944C319.282 67.4121 318.723 66.0886 318.606 64.324C317.018 65.9121 315.253 67.2062 313.312 68.2061C311.371 69.1473 309.283 69.6178 307.047 69.6178C304.812 69.6178 302.959 69.2355 301.489 68.4708C300.018 67.6473 298.901 66.5592 298.136 65.2063C297.43 63.8534 297.019 62.2947 296.901 60.53C296.783 58.7654 296.96 56.8832 297.43 54.8833C297.901 52.5304 298.754 50.1482 299.989 47.7365C301.283 45.3249 302.812 43.1485 304.577 41.2075C306.4 39.2664 308.459 37.7076 310.753 36.5312C313.106 35.296 315.576 34.6784 318.165 34.6784C320.753 34.6784 322.664 35.6783 323.9 37.6782L329.017 13.6794C329.311 12.3853 329.929 11.4148 330.87 10.7678C331.87 10.0619 332.899 9.70898 333.958 9.70898C335.017 9.70898 335.899 10.0619 336.605 10.7678C337.311 11.4148 337.517 12.3853 337.222 13.6794L327.605 58.8537ZM316.488 42.6191C315.076 42.6191 313.753 43.0309 312.518 43.8544C311.341 44.6191 310.253 45.619 309.253 46.8542C308.312 48.0307 307.518 49.3247 306.871 50.7364C306.224 52.1481 305.783 53.501 305.548 54.795C305.371 55.6773 305.283 56.5302 305.283 57.3537C305.283 58.1772 305.43 58.9125 305.724 59.5595C306.018 60.2065 306.459 60.7359 307.047 61.1477C307.636 61.5006 308.43 61.677 309.43 61.677C310.783 61.677 312.047 61.3535 313.224 60.7065C314.4 60.0007 315.459 59.1183 316.4 58.0596C317.341 56.942 318.135 55.7362 318.782 54.4421C319.429 53.0892 319.9 51.7364 320.194 50.3835C320.664 48.3248 320.606 46.5307 320.017 45.0014C319.488 43.4132 318.312 42.6191 316.488 42.6191Z" />
          <path d="M350.048 69.6178C347.577 69.6178 345.43 69.1767 343.607 68.2944C341.783 67.3532 340.313 66.0886 339.195 64.5004C338.078 62.9123 337.342 61.0594 336.989 58.9419C336.637 56.8243 336.725 54.5892 337.254 52.2363C337.784 49.7659 338.666 47.4719 339.901 45.3543C341.136 43.1779 342.636 41.3251 344.401 39.7958C346.165 38.2076 348.165 36.9724 350.401 36.0901C352.695 35.1489 355.136 34.6784 357.724 34.6784C360.194 34.6784 362.253 35.0313 363.9 35.7371C365.547 36.3842 366.841 37.2665 367.782 38.3841C368.782 39.4428 369.4 40.6781 369.635 42.0898C369.929 43.4426 369.929 44.8249 369.635 46.2366C369.341 47.5895 368.782 48.9424 367.959 50.2952C367.135 51.5893 366.106 52.7657 364.87 53.8245C363.635 54.8244 362.165 55.6479 360.459 56.295C358.812 56.8832 357.018 57.1773 355.077 57.1773C354.371 57.1773 353.606 57.1479 352.783 57.089C352.018 56.9714 351.312 56.7949 350.665 56.5596C350.018 56.2655 349.518 55.8538 349.165 55.3244C348.812 54.7362 348.724 53.9421 348.901 52.9422C349.136 51.9422 349.695 51.0305 350.577 50.207C351.459 49.3247 352.489 48.8835 353.665 48.8835C354.312 48.8835 354.871 49.0012 355.342 49.2365C355.871 49.4718 356.518 49.5894 357.283 49.5894C358.459 49.5894 359.43 49.2365 360.194 48.5306C360.959 47.766 361.4 47.0601 361.518 46.4131C361.694 45.472 361.4 44.6191 360.635 43.8544C359.871 43.0309 358.371 42.6191 356.136 42.6191C353.43 42.6191 351.106 43.5603 349.165 45.4425C347.224 47.3248 345.96 49.5894 345.371 52.2363C344.783 54.8833 345.018 57.1184 346.077 58.9419C347.195 60.7653 349.018 61.677 351.548 61.677C353.077 61.677 354.4 61.4712 355.518 61.0594C356.694 60.6477 357.959 59.9124 359.312 58.8537C360.312 58.0302 361.341 57.6184 362.4 57.6184C363.4 57.6184 364.223 58.0008 364.87 58.7654C365.517 59.4713 365.723 60.383 365.488 61.5006C365.37 61.9711 365.165 62.4711 364.87 63.0005C364.576 63.4711 364.194 63.9416 363.723 64.4122C361.782 66.2945 359.606 67.6473 357.194 68.4708C354.783 69.2355 352.4 69.6178 350.048 69.6178Z" />
          <path d="M391.957 51.6187L398.486 63.177C398.78 63.5887 398.927 64.0005 398.927 64.4122C398.986 64.7651 398.956 65.1475 398.839 65.5592C398.603 66.618 397.986 67.5591 396.986 68.3826C395.986 69.2061 394.957 69.6178 393.898 69.6178C393.368 69.6178 392.868 69.4708 392.398 69.1767C391.927 68.9414 391.545 68.5885 391.251 68.1179L385.516 58.236L375.81 68.1179C375.281 68.7061 374.693 69.0884 374.046 69.2649C373.458 69.5002 372.928 69.6178 372.458 69.6178C371.458 69.6178 370.634 69.2061 369.987 68.3826C369.34 67.5591 369.134 66.618 369.37 65.5592C369.487 65.1475 369.605 64.7651 369.722 64.4122C369.899 64.0593 370.222 63.6475 370.693 63.177L381.987 51.7069L376.075 41.2957C375.781 40.531 375.722 39.7369 375.899 38.9134C376.134 37.7959 376.752 36.8547 377.751 36.0901C378.751 35.2666 379.781 34.8548 380.84 34.8548C381.31 34.8548 381.781 35.0019 382.251 35.296C382.781 35.5313 383.192 35.8842 383.487 36.3547L388.427 45.0896L397.074 36.3547C397.545 35.8842 398.074 35.5313 398.662 35.296C399.309 35.0019 399.868 34.8548 400.339 34.8548C401.397 34.8548 402.25 35.296 402.897 36.1783C403.603 37.0018 403.838 37.9429 403.603 39.0017C403.427 39.7663 402.956 40.531 402.191 41.2957L391.957 51.6187Z" />
          <path d="M84 74V62L63.5 41.5L51.5 41.5L84 74Z" />
          <path d="M10 82.9957H21.8559L42 63L62 82.9957H74.1289L42 51L10 82.9957Z" />
          <path d="M0 8.99561L0 20.9956L20.5 41.4956L32.5 41.4956L0 8.99561Z" />
        </S.Icon>

        <S.Text>
          <path d="M74 -0.000118256H62.1441L42 19.9956L22 -0.000118256H9.87109L42 31.9956L74 -0.000118256Z" />
          <path
            d="M42.0956 46.9912C45.1859 46.9912 47.6912 44.486 47.6912 41.3956C47.6912 38.3053 45.1859 35.8 42.0956 35.8C39.0052 35.8 36.5 38.3053 36.5 41.3956C36.5 44.486 39.0052 46.9912 42.0956 46.9912Z"
            fill="#E6007A"
          />
        </S.Text>
      </svg>
    </S.Wrapper>
  </Link>
);

export const Orderbook = () => (
  <svg
    width="192"
    height="45"
    viewBox="0 0 192 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M185 31.7153C185 33.4922 186.457 34.9492 188.234 34.9492C190.046 34.9492 191.503 33.4922 191.503 31.7153C191.503 29.9385 190.046 28.4814 188.234 28.4814C186.457 28.4814 185 29.9385 185 31.7153Z"
      fill="#E6007A"
      stroke="none"
    />
    <path
      d="M6.46775 22.3843C6.46775 16.6984 10.4479 13.9976 14.3214 13.9976C18.2305 13.9976 22.2107 16.6984 22.2107 22.3843C22.2107 28.0703 18.2305 30.7711 14.3214 30.7711C10.4479 30.7711 6.46775 28.0703 6.46775 22.3843ZM1.38595 22.4199C1.38595 30.5223 7.49832 35.5331 14.3214 35.5331C21.1801 35.5331 27.2925 30.5223 27.2925 22.4199C27.2925 14.2819 21.1801 9.27116 14.3214 9.27116C7.49832 9.27116 1.38595 14.2819 1.38595 22.4199ZM41.8499 17.4447C41.4945 17.4091 41.1392 17.3736 40.7482 17.3736C39.2557 17.3736 36.8392 17.8001 35.7731 20.11V17.5158H31.1888V35H35.9152V27.0042C35.9152 23.2372 38.0119 22.0645 40.4284 22.0645C40.8549 22.0645 41.3168 22.1 41.8499 22.2067V17.4447ZM61.6679 9.27116H57.0126V19.2571C56.515 18.3331 55.0936 17.0893 52.0729 17.0893C47.1333 17.0893 43.6862 21.105 43.6862 26.2223C43.6862 31.5174 47.2399 35.4264 52.2151 35.4264C54.5605 35.4264 56.3374 34.3603 57.1192 32.9744C57.1192 33.7917 57.2258 34.6446 57.2969 35H61.8101C61.739 34.2893 61.6679 33.0099 61.6679 31.8372V9.27116ZM48.4481 26.2223C48.4481 23.0951 50.3671 21.3182 52.7837 21.3182C55.2002 21.3182 57.0836 23.0595 57.0836 26.1868C57.0836 29.3496 55.2002 31.1975 52.7837 31.1975C50.2961 31.1975 48.4481 29.3496 48.4481 26.2223ZM70.2424 24.2678C70.349 22.6686 71.6994 20.8207 74.1514 20.8207C76.8522 20.8207 77.9894 22.5265 78.0605 24.2678H70.2424ZM78.5225 28.8165C77.9539 30.3802 76.7456 31.4818 74.5423 31.4818C72.1969 31.4818 70.2424 29.8116 70.1357 27.5017H82.6448C82.6448 27.4306 82.7159 26.7199 82.7159 26.0447C82.7159 20.4298 79.482 16.9827 74.0804 16.9827C69.6027 16.9827 65.4804 20.6075 65.4804 26.1868C65.4804 32.086 69.7093 35.5331 74.5068 35.5331C78.8068 35.5331 81.5787 33.0099 82.4671 29.9893L78.5225 28.8165ZM97.0989 17.4447C96.7436 17.4091 96.3882 17.3736 95.9973 17.3736C94.5047 17.3736 92.0882 17.8001 91.0221 20.11V17.5158H86.4378V35H91.1643V27.0042C91.1643 23.2372 93.2609 22.0645 95.6775 22.0645C96.1039 22.0645 96.5659 22.1 97.0989 22.2067V17.4447ZM105.008 35V32.8678C105.932 34.3603 107.78 35.4264 110.196 35.4264C115.171 35.4264 118.441 31.4818 118.441 26.1868C118.441 20.9984 115.491 17.0538 110.374 17.0538C107.78 17.0538 105.861 18.191 105.079 19.4348V9.27116H100.424V35H105.008ZM113.714 26.2223C113.714 29.4207 111.795 31.1975 109.379 31.1975C106.998 31.1975 105.008 29.3851 105.008 26.2223C105.008 23.024 106.998 21.2827 109.379 21.2827C111.795 21.2827 113.714 23.024 113.714 26.2223ZM130.037 31.2331C127.727 31.2331 125.595 29.5273 125.595 26.2579C125.595 22.9529 127.727 21.2827 130.037 21.2827C132.347 21.2827 134.479 22.9529 134.479 26.2579C134.479 29.5628 132.347 31.2331 130.037 31.2331ZM130.037 16.9827C124.813 16.9827 120.868 20.8562 120.868 26.2579C120.868 31.624 124.813 35.5331 130.037 35.5331C135.261 35.5331 139.205 31.624 139.205 26.2579C139.205 20.8562 135.261 16.9827 130.037 16.9827ZM150.79 31.2331C148.48 31.2331 146.348 29.5273 146.348 26.2579C146.348 22.9529 148.48 21.2827 150.79 21.2827C153.1 21.2827 155.232 22.9529 155.232 26.2579C155.232 29.5628 153.1 31.2331 150.79 31.2331ZM150.79 16.9827C145.566 16.9827 141.621 20.8562 141.621 26.2579C141.621 31.624 145.566 35.5331 150.79 35.5331C156.014 35.5331 159.958 31.624 159.958 26.2579C159.958 20.8562 156.014 16.9827 150.79 16.9827ZM180.64 17.5158H174.457L168.416 24.019V9.27116H163.689V35H168.416V30.3802L170.37 28.319L174.99 35H180.783L173.64 24.8719L180.64 17.5158Z"
      stroke="none"
    />
  </svg>
);
