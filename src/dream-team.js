module.exports = function createDreamTeam(members) {
  team = '';
  if (!Array.isArray(members) || members.length === 0 ) return false;
  good_members = []
  for(let i = 0; i < members.length; i ++){
    if (typeof members[i] == 'string')
    {
      good_members.push(members[i].trim().toUpperCase());
    }
  }

  if(good_members.length == 0) return false;
  good_members.sort();
  for (let i = 0; i < good_members.length; i ++){
    team = team + good_members[i][0];
  }

  return team;
};
