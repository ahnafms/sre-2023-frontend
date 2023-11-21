const plugin = require('tailwindcss/plugin');

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /_(cols|rows)-(.+)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /grid-(rows|cols)-(.+)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        epliogue: ['var(--font-epilogue)'],
        anton: ['var(--font-anton)'],
      },

      fontSize: {
        c1: ['12px', '24px'],
        c2: ['14px', '24px'],
        btn: ['16px', '24px'],
        bt: ['16px', '24px'],
        p: ['18px', '24px'],
        t: ['20px', '24px'],
        h6: ['24px', '32px'],
        h5: ['32px', '48px'],
        h4: ['48px', '64px'],
        h3: ['64px', '84px'],
        h2: ['72px', '90px'],
        h1: ['80px', '96px'],
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      colors: {
        primary: {
          10: '#FFFEC1',
          20: '#FFF886',
          30: '#FFED41',
          40: '#FFDC0D',
          50: '#E8BA00',
          60: '#D19500',
          70: '#A66A02',
          80: '#89530A',
          90: '#74440F',
          100: '#442304',
        },
        secondary: {
          10: '#D4F7E6',
          20: '#ACEED1',
          30: '#76DFB7',
          40: '#3EC999',
          50: '#1BAE80',
          60: '#0F936D',
          70: '#0B7156',
          80: '#0C5945',
          90: '#0B493A',
          100: '#052922',
        },
        tertiary: {
          10: '#DAEDE5',
          20: '#B5DACC',
          30: '#88C0AC',
          40: '#5FA28D',
          50: '#458773',
          60: '#336758',
          70: '#2E574C',
          80: '#28473F',
          90: '#253C36',
          100: '#11221F',
        },
        typo: {
          primary: '#092540',
          white: '#FCFCFC',
          surface: '#F1F2F6',
          outline: '#E4E7EB',
          inline: '#D1D5DC',
          disabled: '#B4B8C5',
          icon: '#A0A4B4',
          input: '#4D4D4D',
          dark: '#1C1C1E',
        },
        success: {
          10: '#E4EDDA',
          20: '#CBDEB8',
          30: '#9DC07E',
          40: '#8AB16A',
          50: '#6D964C',
          60: '#53763A',
          70: '#425C2F',
          80: '#374A2A',
          90: '#314027',
          100: '#172211',
        },
        critical: {
          10: '#FBE5E6',
          20: '#F8D0D1',
          30: '#F2AFB1',
          40: '#F2AFB1',
          50: '#DE686B',
          60: '#C63C40',
          70: '#A62F32',
          80: '#8A2A2C',
          90: '#73292B',
          100: '#3E1112',
        },
      },
      scale: {
        flip: '-1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      const [_, ...values] = [...Array(13).keys(), 'full', 'auto'];
      const gridRowCol = {};

      for (let start of values) {
        for (let span of values) {
          gridRowCol[`._cols-${start}_${span}`] = {
            gridColumnStart: `${start}`,
            gridColumnEnd: `span ${span}`,
          };

          gridRowCol[`._rows-${start}_${span}`] = {
            gridRowStart: `${start}`,
            gridRowEnd: `span ${span}`,
          };
        }
      }

      addComponents(gridRowCol);
    }),
  ],
};

export default config;
