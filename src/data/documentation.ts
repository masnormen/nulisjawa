export const ABOUT_TEXT = `## Tentang

Proyek **Nulis Jawa** berusaha menyediakan cara mengetik aksara Jawa yang semudah dan semirip mungkin dengan cara menulis bahasa Jawa kita sehari-hari.

Sering saya temui betapa sulitnya menggunakan metode input aksara Jawa untuk komputer. Banyak rules/aturan rumit yang digunakan, alat input yang tidak memadai, dll. **Nulis Jawa** berusaha untuk menghindari hal tersebut. Proyek ini dibangun dengan bantuan pustaka [Carakan.js](https://carakan.js.org).

Saran, kritik, dan pendapat Anda sangat dibutuhkan! Silakan utarakan di komentar 😄`;

export const HELP_TEXT = `## Cara Pengunaan ⚠️

Ada 2 mode pengetikan untuk membedakan pepet (ꦼ) dan taling (ꦺ):

|Mode|Pepet (ꦼ)|Taling (ꦺ)|
|-|-|-|
|**Mode tanpa aksen (*default*)**|x|e|
|**Mode aksen**|e|é / è / e\\\`|

Mode tanpa aksen memungkinkan Anda tidak usah ribet mengetik aksen. Sedangkan mode aksen memungkinkan anda untuk mentransliterasikan teks yang memakai aksen, seperti teks di [Wikipedia Basa Jawa](https://jv.wikipedia.org/wiki/Wikip%C3%A9dia:Pendhapa). Tanda ***\\\`*** (*backtick*) bisa digunakan untuk menandai huruf yang memiliki aksen.

|Contoh kalimat|Tanpa aksen|Dengan aksen|
|-|-|-|
|meja remuk|meja rxmuk|méja remuk atau me\\\`ja remuk|
|es dawet|es dawxt|és dawet atau e\\\`s dawet|

## FAQ

#### Kenapa huruf vokal yang berjejer (ai, au, eo) hasilnya salah?

Coba beri spasi di antara huruf vokal yang saling berjejeran. Atau tambahkan "h" sebelum huruf vokal.

|Contoh|Cara input|Hasil|
|-|-|-|
|aero|a ero / ahero|ꦲꦲꦺꦫꦺꦴ|

#### Bagaimana menulis pada lingsa/lungsi dan tanda baca lainnya?

|Tanda Baca|Input|Output|
|------------------|-------------------|-----------|
|Pada lingsa *     |,                  |꧈          |
|Pada lungsi *     |.                  |꧉          |
|Pada pangkat      |:                  |꧇          |
|Pada adeg         |" atau ' atau ( atau )  |꧊          |
|Pada adeg-adeg    |&#124;                |꧋         |
|Pada piseleh      |<                  |꧌    |
|Pada piseleh walik| >                  |꧍     |
|Rerenggan kiwa     |{                  |꧁     |
|Rerenggan tengen   |}                  |꧂      |

*) pada lingsa (koma) otomatis hilang jika bertemu pangkon\\
*) pada lungsi otomatis menjadi pada lingsa jika bertemu pangkon\\
hal ini karena pangkon sudah mengambil fungsi sebagai koma dalam kalimat

`;