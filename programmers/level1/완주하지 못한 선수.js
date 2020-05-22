const isNotParticipant = (participant, completion) => {
  return participant !== completion;
};

const searchUnparticipant = (participants, completions) => {
  for (let i = 0; i < participants.length; i++) {
    if (isNotParticipant(participants[i], completions[i])) {
      return participants[i];
    }
  }
};

const sortArray = (array) => {
  return array.sort();
};

export function solution(participants, completions) {
  return searchUnparticipant(sortArray(participants), sortArray(completions));
}
