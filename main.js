Vue.component('call-to-action', {
    template:` `
});

Vue.component('my-profile', {
    template:`
        <article>
            <my-stats></my-stats>
            <my-details></my-details>
        </article>
    `
});

Vue.component('my-stats', {
    template:`
        <section>My stats</section>
    `
});

Vue.component('my-details', {
    template:`
        <section>My details</section>
    `
});

Vue.component('teams-list', {
    props: ['permission', 'teams', 'diverseTeams', 'moreTeams'],
    template:`
        <section>
            <h2>Teams within this one</h2>
            <button v-if="permission === 2">Start a team within this one</button>
            <team-tags v-if="diverseTeams"></team-tags>
            <ul id="teams">
                <team-item v-for="team in teams"></team-item>
            </ul>
            <button v-if="moreTeams">Show more</button>
        </section>
    `
});

Vue.component('members-list', {
    props: ['members', 'moreMembers'],
    template:`
        <section>
            <h2>Members in this team</h2>
            <member-sorter></member-sorter>
            <ul id="members">
                <member-item v-for="member in members"></member-item>
            </ul>
            <button v-if="moreMembers">Show more</button>
        </section>
    `
});

Vue.component('member-sorter', {
    template:`
        <section>Member sorter</section>
    `
});

Vue.component('join-form', {
    template:`
        <section>Join form</section>
    `
});

Vue.component('contribute-form', {
    template:`
        <section>Contribute form</section>
    `
});

Vue.component('team-form', {
    template:`
        <section>Team form</section>
    `
});

Vue.component('about-info', {
    template:`
        <section>About info</section>
    `
});

Vue.component('social-links', {
    template:`
        <section>Social links</section>
    `
});

new Vue({
    el: 'main',
    data: {
        permission: 1,
        diverseTeams: true,
        teams: [1,2,3],
        moreTeams: true,
        members: [1,2,3],
        moreMembers: true
    }
})