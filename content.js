/* Original, scaffolded English practice. Stages are learning paths, not CEFR qualifications. */
const STAGES = [
 {name:'First steps',label:'START FROM ZERO',icon:'🌱',colour:'#e8f0d9',description:'Meet the alphabet, say hello, and learn your first words.'},
 {name:'My world',label:'BUILD YOUR WORDS',icon:'🏡',colour:'#fbe8d7',description:'Talk about family, food, animals, and the world around you.'},
 {name:'Everyday English',label:'MAKE IT A SENTENCE',icon:'☀️',colour:'#fff0bb',description:'Describe your day and ask simple questions.'},
 {name:'Story explorer',label:'TRAVEL THROUGH TIME',icon:'🧭',colour:'#e5e1f6',description:'Talk about yesterday, make plans, and tell little stories.'},
 {name:'Conversation club',label:'ENGLISH IN REAL LIFE',icon:'💬',colour:'#dceeea',description:'Shop, order food, ask for help, and keep a conversation going.'},
 {name:'Hero in practice',label:'GROW YOUR CONFIDENCE',icon:'🌟',colour:'#f8e1de',description:'Explain ideas, share experiences, and write with purpose.'}
];
function lesson(stage,title,icon,words,tip,example,meaning,grammar,order,reading,speaking){
 const index=LESSONS.filter(l=>l.stage===stage).length;
 const w=words[0];
 LESSONS.push({id:`${stage}-${index}`,stage,index,title,icon,words,tip,example,meaning,speaking,tasks:[
 {type:'choice',prompt:`Which word means “${w[1]}”?`,ar:'اختر الكلمة المناسبة للمعنى.',answer:w[0],options:[w[0],...words.slice(1).map(x=>x[0])]},
 {type:'type',prompt:'Listen and type the word.',ar:'استمع واكتب الكلمة.',answer:words[1][0],audio:words[1][0],hint:words[1][1]},
 {type:'choice',prompt:grammar[0],ar:'اختر الكلمة الصحيحة لإكمال الجملة.',answer:grammar[1],options:grammar.slice(1)},
 {type:'order',prompt:'Put the words in order.',ar:'رتّب الكلمات لتكوين جملة.',answer:order},
 {type:'type',prompt:'Listen and type the sentence.',ar:'استمع واكتب الجملة كاملة.',answer:example,audio:example,hint:meaning},
 {type:'choice',prompt:reading[1],ar:'اقرأ النص ثم اختر الإجابة.',passage:reading[0],answer:reading[2],options:reading.slice(2)}
 ]});
}
const LESSONS=[];
lesson(0,'Hello, English!','👋',[['hello','مرحباً'],['goodbye','إلى اللقاء'],['name','اسم']],
 'Use “Hello” to greet someone. Introduce yourself with “My name is …”.','My name is Sara.','اسمي سارة.',
 ['My name ___ Sara.','is','are','am'],'Hello my name is Ali',
 ['Hello! My name is Sara. I am a student.','What is her name?','Sara','Ali','Noor'],'Say hello and tell someone your name.');
lesson(0,'Letters A–M','🔤',[['apple','تفاحة'],['book','كتاب'],['cat','قطة']],
 'Letters have a name and can represent sounds. A and a are the same letter. Visit the Alphabet room to hear every letter.','A is for apple.','حرف A هو أول حرف في كلمة apple.',
 ['Choose the small letter for B.','b','d','p'],'A is for apple',
 ['A is for apple. B is for book. C is for cat.','Which word begins with B?','book','apple','cat'],'Say A, B, C. Then say apple, book, cat.');
lesson(0,'Letters N–Z','🔡',[['sun','شمس'],['pen','قلم'],['zoo','حديقة الحيوان']],
 'Capital and small letters belong together: N/n, P/p, S/s, Z/z. The British English name of Z is “zed”.','This is a pen.','هذا قلم.',
 ['Choose the small letter for Z.','z','s','n'],'This is a pen',
 ['I have a pen. I write the word sun. Sun begins with S.','Which letter begins the word sun?','S','P','Z'],'Say N to Z using the Alphabet room, then say three words you know.');
lesson(0,'Numbers 1–10','🔢',[['one','واحد'],['two','اثنان'],['three','ثلاثة']],
 'Count: one, two, three, four, five, six, seven, eight, nine, ten. Add -s to most nouns when there is more than one.','I have two pens.','لدي قلمان.',
 ['I have three ___.','books','book','a book'],'I have two pens',
 ['Sara has two pens. Ali has three pens.','How many pens does Ali have?','three','two','one'],'Count five things around you in English.');
lesson(0,'A world of colour','🎨',[['red','أحمر'],['blue','أزرق'],['green','أخضر']],
 'Put the colour before the noun: a red bag, a blue pen. You can also say “The bag is red.”','The bag is red.','الحقيبة حمراء.',
 ['The sky is ___.','blue','a blue','blues'],'The bag is red',
 ['My bag is red. My pen is blue. My book is green.','What colour is the pen?','blue','green','red'],'Choose an object and say its colour.');
lesson(0,'In my classroom','🎒',[['chair','كرسي'],['desk','مكتب'],['bag','حقيبة']],
 'Use “a” before a consonant sound: a desk. Use “an” before a vowel sound: an apple.','This is a desk.','هذا مكتب.',
 ['This is ___ apple.','an','a','two'],'This is my bag',
 ['There is a desk. A bag is on the desk. A chair is next to it.','Where is the bag?','on the desk','under the chair','in the bag'],'Point to three classroom objects and name them.');
lesson(1,'Meet my family','👪',[['mother','أم'],['father','أب'],['sister','أخت']],
 'Use he for a man or boy and she for a woman or girl. Use my to show something belongs or relates to you.','She is my sister.','هي أختي.',
 ['My father is kind. ___ is a teacher.','He','She','It'],'She is my sister',
 ['This is my sister, Noor. She is ten. My brother is seven.','How old is Noor?','ten','seven','three'],'Introduce one person in your family.');
lesson(1,'Head to toe','🙌',[['hand','يد'],['head','رأس'],['eyes','عينان / عيون']],
 'Use have with I/you/we/they and has with he/she/it. Some plurals change: one foot, two feet.','I have two hands.','لدي يدان.',
 ['She ___ brown eyes.','has','have','are'],'I have two hands',
 ['A robot has two hands and two feet. Its eyes are blue.','What colour are its eyes?','blue','brown','green'],'Name five parts of your body.');
lesson(1,'Animal friends','🐱',[['dog','كلب'],['bird','طائر'],['fish','سمكة']],
 'Use can + the base verb to talk about ability: Birds can fly. Do not add -s after can.','A bird can fly.','يستطيع الطائر أن يطير.',
 ['A fish can ___.','swim','swims','swimming'],'A bird can fly',
 ['The dog can run. The bird can fly. The fish can swim.','Which animal can swim?','the fish','the dog','the bird'],'Name an animal and say what it can do.');
lesson(1,'Home sweet home','🛋️',[['bedroom','غرفة نوم'],['kitchen','مطبخ'],['door','باب']],
 'Use in for inside, on for a surface, and under for below: The shoes are under the bed.','The cat is under the bed.','القطة تحت السرير.',
 ['We cook in the ___.','kitchen','bedroom','door'],'The cat is under the bed',
 ['The cat is under the bed. The bag is on the chair.','Where is the bag?','on the chair','under the bed','in the kitchen'],'Describe where two things are in your room.');
lesson(1,'Food I love','🍎',[['bread','خبز'],['water','ماء'],['rice','أرز']],
 'Say “I like …” and “I do not like …”. Use some with uncountable food and drink: some rice, some water.','I like bread and rice.','أحب الخبز والأرز.',
 ['I would like some ___.','water','a water','waters'],'I like bread and rice',
 ['Ali likes rice and fish. Sara likes bread and eggs.','Who likes rice?','Ali','Sara','both children'],'Say two foods you like and one food you do not like.');
lesson(1,'What are you wearing?','👕',[['shirt','قميص'],['shoes','حذاء / أحذية'],['coat','معطف']],
 'Use am/is/are + verb-ing for what is happening now: I am wearing a shirt.','I am wearing a blue shirt.','أرتدي قميصاً أزرق.',
 ['She ___ wearing a coat.','is','are','am'],'I am wearing a blue shirt',
 ['Noor is wearing a green coat and black shoes.','What colour is her coat?','green','black','blue'],'Describe what you are wearing today.');
lesson(2,'My daily routine','🌅',[['breakfast','فطور'],['school','مدرسة'],['sleep','نوم / ينام']],
 'Use the present simple for routines. Add -s with he/she/it: I walk. She walks.','I walk to school every day.','أمشي إلى المدرسة كل يوم.',
 ['He ___ breakfast at seven.','eats','eat','eating'],'I walk to school every day',
 ['Sara gets up at six. She eats breakfast at seven and goes to school at eight.','When does Sara eat breakfast?','at seven','at six','at eight'],'Tell someone three things you do every day.');
lesson(2,'What time is it?','🕘',[['morning','صباح'],['evening','مساء'],['night','ليل']],
 'Use at with clock times, in the morning/evening, and at night. “Half past eight” means 8:30.','I get up at seven.','أستيقظ الساعة السابعة.',
 ['The lesson starts ___ nine.','at','in','on'],'I get up at seven',
 ['The lesson starts at nine and ends at ten. Lunch is at twelve.','When does the lesson end?','at ten','at nine','at twelve'],'Say what time you get up and what time you go to bed.');
lesson(2,'Rain or sunshine','🌦️',[['sunny','مشمس'],['rainy','ممطر'],['cold','بارد']],
 'Use “It is …” to describe weather: It is sunny. Ask “What is the weather like?”','It is sunny today.','الجو مشمس اليوم.',
 ['___ is cold today.','It','They','We'],'It is sunny today',
 ['Today is rainy and cold. We are staying inside and reading.','Why are they staying inside?','It is rainy and cold.','It is hot.','It is sunny.'],'Describe the weather where you are.');
lesson(2,'Happening right now','🏃',[['reading','يقرأ الآن'],['running','يجري الآن'],['cooking','يطبخ الآن']],
 'Present continuous: am/is/are + verb-ing. I am reading. They are running.','They are playing in the park.','هم يلعبون في الحديقة.',
 ['The children ___ playing.','are','is','am'],'They are playing in the park',
 ['Mum is cooking. Dad is reading. The children are playing outside.','Who is reading?','Dad','Mum','the children'],'Look around and say what two people are doing.');
lesson(2,'Around my town','🏙️',[['library','مكتبة'],['hospital','مستشفى'],['park','حديقة']],
 'Use there is for one thing and there are for more than one. Ask “Is there a …?”','There is a park near my home.','توجد حديقة بالقرب من منزلي.',
 ['There ___ two shops here.','are','is','am'],'There is a park near my home',
 ['There is a library next to the park. The hospital is opposite the school.','What is next to the park?','the library','the hospital','the school'],'Describe two places near your home.');
lesson(2,'What can you do?','🚲',[['swim','يسبح'],['ride','يركب'],['draw','يرسم']],
 'Ask “Can you …?” Answer “Yes, I can” or “No, I cannot.” Use the base verb after can.','I can ride a bike.','أستطيع ركوب الدراجة.',
 ['Can she ___ a picture?','draw','draws','drawing'],'I can ride a bike',
 ['Ali can swim and ride a bike. He cannot play the piano yet.','What can Ali NOT do yet?','play the piano','swim','ride a bike'],'Say two things you can do and one thing you want to learn.');
lesson(3,'Yesterday’s adventure','📅',[['yesterday','أمس'],['visited','زار'],['played','لعب']],
 'Use the past simple for finished past events. Many verbs add -ed: visit → visited. Others change: go → went.','We visited the park yesterday.','زرنا الحديقة أمس.',
 ['Yesterday I ___ to school.','went','go','going'],'We visited the park yesterday',
 ['Yesterday we visited the park. We played football and had a picnic.','Where did they go?','to the park','to the beach','to school'],'Tell someone what you did yesterday.');
lesson(3,'Ask about the past','❔',[['watched','شاهد'],['walked','مشى'],['finished','أنهى']],
 'Past questions: Did + subject + base verb. “Did you watch?” Negative: “I did not watch.”','Did you watch the film?','هل شاهدت الفيلم؟',
 ['Did she ___ her homework?','finish','finished','finishes'],'Did you watch the film',
 ['Ali did not watch the film. He walked home and finished his homework.','Did Ali watch the film?','No, he did not.','Yes, he did.','He is watching it now.'],'Ask someone what they did last weekend.');
lesson(3,'A moment in a story','🌧️',[['waiting','ينتظر'],['raining','تمطر'],['arrived','وصل']],
 'Past continuous: was/were + verb-ing for an action in progress. “I was waiting when the bus arrived.”','It was raining when I arrived.','كانت تمطر عندما وصلت.',
 ['They ___ waiting for the bus.','were','was','is'],'It was raining when I arrived',
 ['Sara was waiting for the bus when it started raining. She opened her umbrella.','What was Sara doing when it started raining?','waiting for the bus','eating lunch','reading at home'],'Describe what you were doing at eight yesterday evening.');
lesson(3,'First, then, finally','📖',[['first','أولاً'],['next','بعد ذلك'],['finally','أخيراً']],
 'Sequence words help readers follow a story or process: first, next, then, finally.','First we washed our hands.','أولاً غسلنا أيدينا.',
 ['Use ___ for the last step.','finally','first','before'],'First we washed our hands',
 ['First we washed our hands. Next we made sandwiches. Finally we ate lunch.','What did they do after washing their hands?','made sandwiches','ate lunch','went home'],'Explain a simple activity in three steps.');
lesson(3,'Bigger and better','🐘',[['bigger','أكبر'],['smaller','أصغر'],['faster','أسرع']],
 'Compare with -er + than: taller than. Longer adjectives often use more: more interesting. Good changes to better.','An elephant is bigger than a cat.','الفيل أكبر من القطة.',
 ['This book is ___ interesting than that one.','more','most','much'],'An elephant is bigger than a cat',
 ['The red bag costs five rials. The blue bag costs eight rials.','Which bag is cheaper?','the red bag','the blue bag','They cost the same.'],'Compare two places, animals, or objects.');
lesson(3,'Plans for tomorrow','🗓️',[['tomorrow','غداً'],['weekend','عطلة نهاية الأسبوع'],['visit','يزور']],
 'Use am/is/are going to + base verb for a plan: We are going to visit our cousins.','I am going to visit my friend.','سأزور صديقي.',
 ['She is going to ___ a book.','read','reads','reading'],'I am going to visit my friend',
 ['Tomorrow Ali is going to visit his friend. They are going to play football.','What are they planning to do together?','play football','watch a film','go shopping'],'Talk about two plans for your next weekend.');
lesson(4,'Nice to meet you','🤝',[['meet','يقابل'],['live','يعيش'],['hobby','هواية']],
 'Keep a conversation going by asking a follow-up question: “Where do you live?” “What do you enjoy?”','I live in Salalah.','أعيش في صلالة.',
 ['Where ___ you live?','do','does','is'],'It is nice to meet you',
 ['Sara lives in Salalah. She enjoys reading and swimming.','Which question asks about her hobby?','What do you enjoy?','Where do you live?','What is your name?'],'Introduce yourself, say where you live, and ask a question.');
lesson(4,'Finding the way','🗺️',[['left','يسار'],['right','يمين'],['straight','مستقيم']],
 'Use clear directions: Go straight on. Turn left. It is next to the library. Begin politely with “Excuse me”.','Turn left at the library.','انعطف يساراً عند المكتبة.',
 ['Go straight ___ .','on','in','under'],'Turn left at the library',
 ['Go straight on. Turn right at the bank. The café is next to the park.','Where should you turn right?','at the bank','at the park','at the café'],'Give directions from your classroom to another place.');
lesson(4,'At the shop','🛍️',[['price','سعر'],['cheap','رخيص'],['expensive','غالي']],
 'Ask “How much is this?” for one item, and “How much are these?” for plural items.','How much is this bag?','كم سعر هذه الحقيبة؟',
 ['How much ___ these shoes?','are','is','am'],'How much is this bag',
 ['The bag is twelve rials. The shoes are twenty rials. Sara buys the bag.','How much does Sara pay?','twelve rials','twenty rials','thirty-two rials'],'Act out buying an item and asking its price.');
lesson(4,'At the café','🥪',[['menu','قائمة الطعام'],['juice','عصير'],['bill','فاتورة']],
 '“I would like …” is a polite way to order. You can also say “Could I have …, please?”','I would like some water, please.','أود بعض الماء، من فضلك.',
 ['I ___ like a sandwich, please.','would','am','have'],'Could I have the menu please',
 ['Sara orders a sandwich and water. Ali orders soup and juice.','What does Ali order to drink?','juice','water','tea'],'Order a meal politely and ask for the bill.');
lesson(4,'Could you help me?','🫶',[['help','مساعدة'],['repeat','يكرر'],['slowly','ببطء']],
 'Ask for support with “Could you help me?” or “Could you repeat that, please?” Learning includes asking questions.','Could you speak more slowly?','هل يمكنك التحدث ببطء أكثر؟',
 ['Could you ___ that, please?','repeat','repeats','repeated'],'Could you speak more slowly',
 ['Ali cannot hear the last word. He asks the teacher to repeat it.','What should Ali say?','Could you repeat that, please?','Goodbye!','How much is it?'],'Practise asking for help and asking someone to repeat a sentence.');
lesson(4,'Feelings and invitations','💌',[['excited','متحمس'],['tired','متعب'],['join','ينضم']],
 'Invite with “Would you like to …?” Accept with “I would love to.” Decline politely: “Sorry, I cannot.”','Would you like to join us?','هل تود الانضمام إلينا؟',
 ['Would you like ___ play?','to','for','at'],'Would you like to join us',
 ['Sara invites Ali to the park. Ali says, “I would love to, but I have a lesson.”','Can Ali go to the park?','No, he has a lesson.','Yes, he is going now.','No, he dislikes parks.'],'Invite a friend to do something and practise a polite reply.');
lesson(5,'Give a reason','💡',[['because','لأن'],['although','على الرغم من'],['however','ومع ذلك']],
 'Use because to give a reason. Use although to connect contrasting ideas: Although it was cold, we went out.','I enjoy reading because I learn new things.','أستمتع بالقراءة لأنني أتعلم أشياء جديدة.',
 ['I stayed home ___ I was tired.','because','but','although'],'I enjoy reading because I learn new things',
 ['Although it was raining, Sara went for a walk. She took an umbrella because she wanted to stay dry.','Why did Sara take an umbrella?','to stay dry','to carry her books','to block the sun'],'Give an opinion and support it with a reason.');
lesson(5,'Helpful advice','🌿',[['should','ينبغي'],['practise','يتدرّب'],['improve','يتحسن']],
 'Give advice with should + base verb: You should practise. “You could …” suggests an option.','You should practise a little every day.','ينبغي أن تتدرّب قليلاً كل يوم.',
 ['You should ___ new words.','review','reviews','reviewed'],'You should practise a little every day',
 ['Ali wants to improve his spelling. His teacher suggests writing new words and reviewing them daily.','What is the teacher’s advice?','review words every day','stop writing','study only once a year'],'Give a friend two suggestions for learning English.');
lesson(5,'Have you ever?','🌍',[['ever','في أي وقت مضى'],['never','أبداً'],['travelled','سافر']],
 'Present perfect: have/has + past participle. Ask about life experience with “Have you ever …?” Use past simple for a finished time.','I have never travelled by train.','لم أسافر بالقطار من قبل.',
 ['She has ___ to Muscat.','been','be','went'],'Have you ever travelled by train',
 ['Sara has visited Muscat twice. She went there last year with her family.','How many times has Sara visited Muscat?','twice','once','never'],'Ask a partner about an experience, then ask when it happened.');
lesson(5,'If we keep trying','🌈',[['if','إذا'],['will','سوف'],['enough','كافٍ']],
 'For a possible future result, use if + present simple, then will + base verb: If it rains, we will stay inside.','If I practise, I will improve.','إذا تدرّبت فسوف أتحسن.',
 ['If she studies, she ___ learn more.','will','would','was'],'If I practise I will improve',
 ['If the weather is sunny, we will have a picnic. If it rains, we will play indoors.','What will they do if it rains?','play indoors','have a picnic','go swimming'],'Make two sentences about possible future situations.');
lesson(5,'Write a clear message','✉️',[['message','رسالة'],['invite','يدعو'],['reply','يرد']],
 'A clear message has a greeting, a purpose, useful details, and a closing. Include the day, time, and place when inviting someone.','Please let me know if you can come.','يرجى إخباري إن كنت تستطيع الحضور.',
 ['Which is a polite closing?','Best wishes,','At the library.','On Monday.'],'Please let me know if you can come',
 ['Hi Sara, please join our reading club on Monday at four in the library. Best wishes, Ali.','Where will the club meet?','in the library','in the café','at Ali’s home'],'Write a short invitation with a greeting, time, place, and closing.');
lesson(5,'Your voice matters','🏆',[['opinion','رأي'],['agree','يوافق'],['example','مثال']],
 'Organise an opinion with a point, a reason, and an example. Disagree politely: “I see your point, but …”.','In my opinion, learning together is helpful.','في رأيي، التعلّم معاً مفيد.',
 ['Which phrase introduces an opinion?','I think that','Yesterday at six','Turn left at'],'In my opinion learning together is helpful',
 ['I think reading every day is useful because it builds vocabulary. For example, I learnt five new words from a short story.','What supports the writer’s opinion?','a reason and an example','only a greeting','a price and a time'],'Speak for one minute about how you learn best. Give a reason and an example.');

const ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter,i)=>({letter,word:['apple','book','cat','dog','egg','fish','goat','hat','insect','jam','kite','lion','moon','nose','orange','pen','queen','rabbit','sun','tree','umbrella','van','window','box','yellow','zebra'][i],icon:['🍎','📖','🐱','🐶','🥚','🐟','🐐','🎩','🐞','🍓','🪁','🦁','🌙','👃','🍊','🖊️','👑','🐰','☀️','🌳','☂️','🚐','🪟','📦','🟡','🦓'][i]}));
