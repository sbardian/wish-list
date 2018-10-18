import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    backgroundColor: '#e2e2e2',
  },
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
  },
});
const typography = new Typography(lincolnTheme);

export default typography;
