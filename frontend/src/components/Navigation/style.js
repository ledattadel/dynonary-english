import { makeStyles } from '@material-ui/core/styles';

const imgSize = '4.8rem',
  iconSize = '2.4rem';

export default makeStyles((theme) => ({
  navWrapper: {
    paddingBottom: 'var(--nav-height)',
  },

  nav: {
    backgroundColor: 'var(--bg-color-sec)',
    height: 'var(--nav-height)',
    boxShadow: 'var(--box-shadow)',

    position: 'fixed',
    top: 0,
    left: 0,
  },

  logo: {
    marginRight: '0.8rem',
  },

  imgSize: {
    height: imgSize,
    width: imgSize,
  },

  iconSize: {
    fontSize: `${iconSize} !important`,
    color: 'var(--label-color)',
  },

  control: {
    gap: '0.2rem',
    marginLeft: 'auto',

    [theme.breakpoints.up('xs')]: {
      gap: '0.8rem',
    },

    [theme.breakpoints.up('md')]: {
      gap: '1.2rem',
    },
  },

  avt: {
    transition: theme.transitions.easing.easeIn,
    '&:hover, &:active': {
      opacity: 0.85,
    },
  },

  searchIcon: {
    fontSize: iconSize,
    color: 'var(--label-color)',
  },

  loginBtn: {
    height: '3.7rem',
    minWidth: '12rem',
  },

  loginLabel: {
    fontSize: '1.4rem',
  },
}));
