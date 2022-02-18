import React from 'react'

// import Button from '@mui/material/Button'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import { ThemeProvider, createTheme } from '@mui/material'
// import { orange } from '@mui/material/colors'

import { Button, Box, Typography } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';


const theme = createTheme({
    palette: {
        primary: orange,
        secondary: green
    }
});

export default {
    title: 'MUI Components/Button',
    component: Button,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        )
    ],
    argTypes: {
        color: {
            options: ["inherit", "primary", "secondary", "success", "error", "info", "warning"],
            control: {
                type: 'select',
                labels: {
                    "primary": 'primary',
                    "secondary": 'secondary',
                    "inherit": 'inherit',
                    "success": 'success',
                    "error": 'error',
                    "info": 'info',
                    "warning": 'warning'
                }
            }
        }
    }
}

const ShowVariants = ({ variants, color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth }) => {

    const ButtonWithControls = (props) =>
        <Button
            sx={{ mr: "8px", mb: "8px" }}
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            {...props}
        />

    return (
        <Box sx={{ bgcolor: theme => theme.palette.primary.main }} px="20px" py="1px">
            {variants ? (
                variants.map(({ variant, label, ...props }) => (
                    <Box key={variant} my="10" bgcolor="#FFF" p="60px">
                        <Typography color="#999">The '{variant}' Variant</Typography>
                        <hr />
                        <br />
                        <ButtonWithControls variant={variant} {...props} >
                            {label || "Default Size '2xs'"}
                        </ButtonWithControls>
                        <ButtonWithControls variant={variant} allCaps {...props}>
                            {label || 'Default All Caps'}
                        </ButtonWithControls>
                        <ButtonWithControls variant={variant} size="small" {...props}>
                            {label || "Size 'small'"}
                        </ButtonWithControls>
                        <ButtonWithControls variant={variant} size="medium" {...props}>
                            {label || "Size 'medium'"}
                        </ButtonWithControls>
                        <ButtonWithControls variant={variant} size="large" {...props}>
                            {label || "Size 'large'"}
                        </ButtonWithControls>
                    </Box>
                ))
            ) : (
                <ButtonWithControls>Label</ButtonWithControls>
            )}
        </Box>
    )
}

export const AllVariants = ShowVariants.bind({});
AllVariants.args = {
    color: 'primary',
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    variants: [
        {
            variant: 'contained'
        },
        {
            variant: 'outlined'
        },
        {
            variant: 'text'
        },
    ]
}; 