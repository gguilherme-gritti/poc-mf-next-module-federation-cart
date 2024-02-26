import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export function Cart() {
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        // onClick={toggleDrawer('right', false)}
        // onKeyDown={toggleDrawer('right', false)}
        >
            <>
                <List>
                    {['Apenas', 'Um', 'Teste de', 'MF'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Carrinho', 'Com', 'Item'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>
        </Box>
    );
}