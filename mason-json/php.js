module.exports = {
    name: 'app', 
    build: '.',
    base: 'benmag/humhub', 
    type: 'service',
    volumes: {
        './':'/app',
    },
    ports: [
        "80:80",
        "443:443"
    ],
    environment: {
        'GITHUB_TOKEN': 'REPLACE_ME',
    }
}