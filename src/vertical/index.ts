// ** Icon imports
import Login from 'mdi-material-ui/Login';
import Table from 'mdi-material-ui/Table';
import CubeOutline from 'mdi-material-ui/CubeOutline';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline';
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline';
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended';
import { VerticalNavItemsType } from '@/components/types';

// ** Type import
// s

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboaord',
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/dashboaord',
    },
    {
      sectionTitle: 'Pages',
    },
    {
      title: 'Login',
      icon: Login,
      path: '/auth/login',
      openInNewTab: true,
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/auth/register',
      openInNewTab: true,
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/dashboaord',
      openInNewTab: true,
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/dashboaord',
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended,
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/dashboaord',
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/dashboaord',
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/dashboaord',
    },
  ];
};

export default navigation;
