const imageGallery = [
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300118/OIB/IMG_7813_bajmps.jpg', id: '1', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300117/OIB/IMG_7812_jxop92.jpg', id: '2', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0856_nsumbw.jpg', id: '16', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300085/OIB/IMG_0855_pxktfn.jpg', id: '14', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300088/OIB/IMG_0830_zjscrl.jpg', id: '4', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300089/OIB/IMG_0831_mtdfft.jpg', id: '3', description: 'description', category: "bedroom"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300087/OIB/IMG_0833_m0l3eb.jpg', id: '6', description: 'description', category: "bedroom"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0838_c8ypkj.jpg', id: '8', description: 'description', category: "bedroom"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0837_fvjmbz.jpg', id: '10', description: 'description', category: "bedroom"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0836_lhbpz5.jpg', id: '13', description: 'description', category: "bedroom"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300085/OIB/IMG_0840_wt8vd9.jpg', id: '15', description: 'description', category: "bath"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300087/OIB/IMG_0832_borrz4.jpg', id: '7', description: 'description', category: "bath"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0835_kg7uda.jpg', id: '11', description: 'description', category: "bath"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0834_yb8wls.jpg', id: '12', description: 'description', category: "bath"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300086/OIB/IMG_0839_ihx4hu.jpg', id: '9', description: 'description', category: "living"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0841_gfmqr7.jpg', id: '17', description: 'description', category: "kitchen"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0843_qtepub.jpg', id: '18', description: 'description', category: "living"},

{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300087/OIB/IMG_0829_wfowsh.jpg', id: '5', description: 'description', category: "outside"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0853_yhnx9g.jpg', id: '19', description: 'description', category: "outside-shower"},
{url: 'https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0854_vekfeb.jpg', id: '20', description: 'description', category: "outside-shower"},

];

export default imageGallery;

// bad
// http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Flwd-loganwebdev%2Fimage%2Fv1653300084%2FOIB%2FIMG_0853_yhnx9g.jpg&w=3840&q=75

// good
// http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Flwd-loganwebdev%2Fimage%2Fupload%2Fv1653300118%2FOIB%2FIMG_7813_bajmps.jpg&w=2048&q=75

// https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300117/OIB/IMG_7812_jxop92.jpg
// https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300084/OIB/IMG_0854_vekfeb.jpg
// upstream image response failed for https://res.cloudinary.com/lwd-loganwebdev/image/upload/v1653300087/OIB/IMG_0833_m0l3eb.jpg 400
