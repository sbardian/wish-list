import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
  },
});
const typography = new Typography(lincolnTheme);

export default typography;
