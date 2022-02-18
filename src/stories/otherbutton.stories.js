import React from 'react'

import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'
// import Button from '@material-ui/core/Button'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { orange } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: orange
    }
});

export default {
    title: 'MUI Components/BBButton',
    component: Button,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        )
    ],
}

const Template = (args) => <Button {...args} >Hello</Button>

export const Default = Template.bind({})
Default.args = {
    color: "primary",
    size: "large",
    variant: 'contained'
}

