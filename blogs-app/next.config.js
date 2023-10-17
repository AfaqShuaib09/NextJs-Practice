/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/home1",
                destination: "/post",
                permanent: false,
            },
        ];
    }
}

module.exports = nextConfig
