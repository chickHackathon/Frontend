export const avatarList = [
    {
        id: 1,
        src: () => import('../assets/logo.png')
    }
];

export  function setAvatar(id: number) {
    const resolvedId = id === null ? Math.floor(Math.random() * 10) + 1 : id;
    const matchedAvatar = avatarList.find((avatar) => avatar.id === resolvedId)
        || avatarList.find((avatar) => avatar.id === 1)!;

    return matchedAvatar.src().then(module => module.default);
}