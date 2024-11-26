import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

interface InstagramPostProps {
  username: string;
  avatarUrl: string;
  mediaUrl: string;
  description: string;
  likes: number;
  timeAgo: string;
}

const InstagramPost: React.FC<InstagramPostProps> = ({
  username,
  avatarUrl,
  mediaUrl,
  description,
  likes,
  timeAgo,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: '470px',
          '--Card-radius': (theme) => theme.vars.radius.xs
        }}
      >
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                m: '-2px',
                borderRadius: '50%',
                background:
                  'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              },
            }}
          >
            <Avatar
              size="sm"
              src={avatarUrl}
              sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
            />
          </Box>
          <Typography sx={{ fontWeight: 'lg' }}>{username}</Typography>
          <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
            <MoreHoriz />
          </IconButton>
        </CardContent>
        <CardOverflow>
          <AspectRatio ratio="4/3" sx={{ maxWidth: '100%' }}>
            <img 
              src={mediaUrl} 
              alt="" 
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
          <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
            <IconButton variant="plain" color="neutral" size="sm">
              <FavoriteBorder />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <ModeCommentOutlined />
            </IconButton>
            <IconButton variant="plain" color="neutral" size="sm">
              <SendOutlined />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={[
                  {
                    borderRadius: '50%',
                    width: `${Math.max(6 - index, 3)}px`,
                    height: `${Math.max(6 - index, 3)}px`,
                  },
                  index === 0
                    ? { bgcolor: 'primary.solidBg' }
                    : { bgcolor: 'background.level3' },
                ]}
              />
            ))}
          </Box>
          <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
            <IconButton variant="plain" color="neutral" size="sm">
              <BookmarkBorderRoundedIcon />
            </IconButton>
          </Box>
        </CardContent>
        <CardContent>
          <Link
            component="button"
            underline="none"
            textColor="text.primary"
            sx={{ fontSize: 'sm', fontWeight: 'lg' }}
          >
            {likes} Likes
          </Link>
          <Typography sx={{ fontSize: 'sm' }}>
            <Link
              component="button"
              color="neutral"
              textColor="text.primary"
              sx={{ fontWeight: 'lg' }}
            >
              {username}
            </Link>{' '}
            {description}
          </Typography>
          <Link
            component="button"
            underline="none"
            startDecorator="…"
            sx={{ fontSize: 'sm', color: 'text.tertiary' }}
          >
            more
          </Link>
          <Link
            component="button"
            underline="none"
            sx={{ fontSize: '10px', color: 'text.tertiary', my: 0.5 }}
          >
            {timeAgo}
          </Link>
        </CardContent>
        <CardContent orientation="horizontal" sx={{ gap: 1 }}>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
            <Face />
          </IconButton>
          <Input
            variant="plain"
            size="sm"
            placeholder="Add a comment…"
            sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px' }}
          />
          <Link disabled underline="none" role="button">
            Post
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InstagramPost;