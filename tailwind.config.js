/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "Javascript/sectionPersonalData.js", "Javascript/sectionInformation.js", "Javascript/footer.js"],
  theme: {
    extend: {
      fontFamily: {
        'fontfamily': ["Comic Sans MS", "Comic Sans"],
      },
      colors: {
        //colores datos personales
        'bgpersonaldata': '#212F3C',
        'textname': '#ffffff',
        'textsubtitle': '#ffffff',
        'textdata': '#ffffff',
        'textlinksdata': '#00E8FF',
        'texthoverlinksdata': '#E7809E',

        //color fondo information
        'bginformation': 'blanchedalmond',

        //colores habilidades
        'texttitleabilities': '#CA6F1E',
        'textabilities': '#000000',
        'textsubabilities': '#5246CD',
        'textsubsubabilities': '#791B1B',
        'bgsubabilities': '#ffffff',
        'bgsubsubabilities': '#F1948A',

        //colores perfil
        'texttitleprofile': '#CA6F1E',
        'textprofiletext': '#000000',

        //colores educación
        'texttitleeducation': '#CA6F1E',
        'texteducationtitles': '#1B7079',
        'texteducationlocation': '#6E2B67',
        'texteducationstatus': '#079E7E',

        //colores experiencia
        'texttitleexperience': '#CA6F1E',
        'textexperiencetitles': '#1B7079',
        'textexperiencecompany': '#6E2B67',
        'textexperiencedate': '#079E7E',

        //colores otros datos
        'texttitleothers': '#CA6F1E',
        'textothersdatatitle': '#1B7079',
        'textothersdatainput': '#6E2B67',

        //color footer
        'bgfooter': '#212F3C',
        'icons': '#ffffff',
        'bgicons': '#1F618D'

      },
    },
  },
  plugins: [],
}
