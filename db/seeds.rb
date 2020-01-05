short_lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

User.create(
  email: 'maciej.lorens@gmail.com',
  password: '1234567890',
  password_confirmation: '1234567890',
  admin: true
)

c1 = Category.create(name: 'dietetyka')
c2 = Category.create(name: 'fitness')
c3 = Category.create(name: 'zdrowie')

t1 = Tag.create(name: 'woda')
t2 = Tag.create(name: 'kalorie')
t3 = Tag.create(name: 'energia')


p1 = {"title"=>"<h2>Prawdziwa przyczyna epidemii otyłości</h2>\r\n", "introduction"=>"<p>Gł&oacute;d i niedożywienie funkcjonują w świadomości społeczeństw kraj&oacute;w rozwiniętych, jako plaga i plama na sumieniu ludzkości. Jednak każdego roku liczba głodujących i niedożywionych znacznie maleje. Prawdziwym mordercą, kt&oacute;ry każdego dnia zbiera coraz obfitsze żniwo jest otyłość. WHO uznała tą chorobę za światową epidemię XXI wieku.</p>\r\n", "content"=>"<h3>Niedługo głodu nie będzie, a otyłość będzie zabijała miliony</h3>\r\n\r\n<p>Z otyłością mamy do czynienia w momencie, kiedy udział tkanki tłuszczowej przekroczy 25% u mężczyzn i 30% u kobiet!&nbsp;<a href=\"#sdfootnote1sym\" id=\"[1]\" name=\"[1]\">[1]</a> Według klasyfikacji <em>World Health Organization</em>, otyłość pierwszego stopnia zaczyna się po przekroczeniu 30 punkt&oacute;w <em>Body Mass Index.</em> Jest to choroba, kt&oacute;ra rozwija się dość długo, daje wyraźne objawy w postaci wzrostu masy ciała i odkładania się tłuszczu.</p>\r\n\r\n<p>Skala, jaką przybrało występowanie otyłości mrozi krew w żyłach. Prawie 2,8 miliona dorosłych os&oacute;b rocznie umiera w wyniku nadwagi i otyłości, a liczba ta stale rośnie.&nbsp;<a href=\"#sdfootnote1sym\" name=\"sdfootnote1anc\">[2]</a> W 2010 roku w USA otyła była co trzecia dorosła osoba!&nbsp;<a href=\"#sdfootnote2sym\" name=\"sdfootnote2anc\">[3]</a> W Polsce problem ten narasta, a lekarze i dietetycy biją na alarm. W 1996 roku otyłość dotyczyła 10,3% mężczyzn powyżej 15 roku życia. W 2004 było to już 12,6%, a w 2009 aż 16,6%. Można domniemywać, że obecnie co piąty facet w Polsce jest otyły, jednak nie znamy dokładnych danych. W przypadku kobiet ten wzrost nie był aż tak duży, nie znaczy to jednak, że nie ma się czym martwić. W 1996 otyłych było 12,4% kobiet, 8 lat p&oacute;źniej 12,5%, a w 2009 15,2%.&nbsp;<a href=\"#sdfootnote3sym\" name=\"sdfootnote3anc\">[4]</a></p>\r\n\r\n<p>Czy wiedziałeś, że: <a href=\"#[5]\" id=\"[5]\" name=\"[5]\">[5]</a></p>\r\n\r\n<ul>\r\n\t<li>Według danych z 2012 r., aż 53% dorosłej populacji kraj&oacute;w OECD ma nadmierną masę ciała, otyłość lub nadwagę?</li>\r\n\t<li>W ciągu ostatnich kilkunastu lat, występowanie otyłości w Danii, Szwecji, Norwegii, Francji i Czechach wzrosło o ponad 40% ?!</li>\r\n\t<li>Jedną z najważniejszych przyczyn otyłości mogą być zaburzenia w składzie i funkcjonowaniu mikroflory jelitowej?</li>\r\n</ul>\r\n\r\n<h3>Za wszystkim stoją bakterie?</h3>\r\n\r\n<p>Ciało człowieka to niezwykle skomplikowany mechanizm. Opr&oacute;cz grup tkanek, narząd&oacute;w i układ&oacute;w w naszym ciele żyje setki gatunk&oacute;w bakterii, kt&oacute;re razem z grzybami, wirusami i archeonami tworzących mikroflorę. Łącznie składa się na nią aż 10^11 &ndash; 10^13 kom&oacute;rek! To właśnie przew&oacute;d pokarmowy jest miejscem największego zagęszczenia mikroorganizm&oacute;w.</p>\r\n\r\n<p>Jak sugerują najnowsze badania, mikroflora jelitowa bierze udział w kontrolowaniu masy ciała. Ponadto, jest odpowiedzialna za r&oacute;wnowagę energetyczną oraz wywoływanie stan&oacute;w zapalnych. Nic więc dziwnego, że naukowcy doszli do wniosku, iż rola mikroflory musi być związana z patofizjologią otyłości. Dowiedziono, że stosowanie prebiotyk&oacute;w i probiotyk&oacute;w wpływa na skład mikroflory jelitowej. Na wskutek ich działania zmieniają się apetyt, masa i skład ciała oraz funkcje metaboliczne.</p>\r\n\r\n<p>Czy to możliwe, że baterie mają aż taki wpływ na masę ciała? W 2006 r. Turnbaugh i inni przeprowadzili badanie na myszach. Dw&oacute;m grupom ze sterylnymi przewodami pokarmowymi przeszczepili bakterie jelitowe odpowiednio z jelita myszy otyłych i tych o prawidłowej masie ciała. Następnie karmiono je w identyczny spos&oacute;b. Efekt? Myszy z bakteriami pochodzącymi od otyłych osobnik&oacute;w r&oacute;wnież stały się otyłe.</p>\r\n\r\n<h3>Co z tą wiedzą począć dalej?</h3>\r\n\r\n<p>Otyłość jest bardzo trudna do wyleczenia. Konieczne jest wprowadzenie długotrwałych zmian w diecie, r&oacute;wnolegle ze zwiększeniem aktywności fizycznej. W wyniku tych zmian dodatni bilans energetyczny powinien się zredukować. Wiedząc, że na mikroflorę pozytywnie wpływają probiotyki i prebiotyki, można rozważyć włączenie ich do diety po konsultacji ze specjalistą. Mogą one mieć pozytywny wpływ i częściowo zapobiegać r&oacute;wnież innym chorobom metabolicznym. Zmienić mikroflorę można r&oacute;wnież wprowadzając do diety mleczne produkty fermentowane, oraz kiszoną kapustę i og&oacute;rki. Należy jednak pamiętać, że każdy składnik diety w nieodpowiedniej ilości może odnieść skutek odwrotny do zamierzonego. Warto wobec tego zbadać sw&oacute;j organizm, zidentyfikować niedobory i nadwyżki poszczeg&oacute;lnych składnik&oacute;w i w oparciu o tą wiedzę zbudować spersonalizowany plan żywienia.</p>\r\n\r\n<p>[1] World Health Organization: The challenge of obesity in the WHO European Region. Fact sheet EURO 2005; 13: 1-4.<br />\r\n[2]&nbsp;Obesity and overweight. Fact Sheets No 311. World Health Organization, Updated March 2013; 29.10.2013<br />\r\n[3]&nbsp;Ogden C.L., Carroll M.D., Kit B.K. Centers for Disease Control and Prevention. Prevalence of Obesity in the United States, 2009&ndash;2010. NCHS Data Brief, 2012; 82.<br />\r\n[4]&nbsp;Stan Zdrowia Ludności w 2009 roku. Głowny Urząd Statystyczny. Departament Badań Społecznych<br />\r\n[5]&nbsp;Brończyk-Puzoń A., Koszowska A., Nowak J., Dittfeld A., Bieniek J., Epidemiologia otyłości na świecie i w Polsce. Forum Zaburzeń Metabolicznych, 2014, tom 5, nr 1, s. 1-5<br />\r\n[6]&nbsp;Kobyliak N., Virchenko O., Falalyeyeva T. : Pathophysiological role of host microbiota in the development of obesity. Nutrition Journal 2016, 15:43.<br />\r\n[7]&nbsp;Turnbaugh P.J., Ley R.E., Mahowald M.A. i wsp. An obesity-associated gutmicrobiome with increased capacity for energy harvest. Nature 2006; 444:1027&ndash;1031.</p>\r\n", "author"=>"Aleksandra Kucharczyk", "category_id"=> c3.id}

Post.new(p1)

n1 = New.create(title: 'Sample new title 1', introduction: short_lorem, content: lorem)
n2 = New.create(title: 'Sample new title 2', introduction: short_lorem, content: lorem)
n3 = New.create(title: 'Sample new title 3', introduction: short_lorem, content: lorem)


Result.create(name: 'Marek', result: -9.5, created_at: 1.days.ago)
Result.create(name: 'Justyna', result: -4.2, created_at: 2.days.ago)
Result.create(name: 'Weronika', result: -4.9, created_at: 5.days.ago)
Result.create(name: 'Maciej', result: -5.1, created_at: 7.days.ago)
Result.create(name: 'Tomasz', result: -7.8, created_at: 7.days.ago)

Result.create(name: 'Edyta', result: -4.3, created_at: 8.days.ago)
Result.create(name: 'Monika', result: -2.9, created_at: 9.days.ago)
Result.create(name: 'Grzesiek', result: -6.3, created_at: 11.days.ago)
Result.create(name: 'Ewa', result: -5.0, created_at: 12.days.ago)
Result.create(name: 'Miłosz', result: -8.1, created_at: 15.days.ago)

Result.create(name: 'Ola', result: -4.4, created_at: 17.days.ago)
Result.create(name: 'Anita', result: -6.6, created_at: 20.days.ago)
Result.create(name: 'Robert', result: -3.8, created_at: 23.days.ago)
Result.create(name: 'Monika', result: -4.6, created_at: 24.days.ago)
Result.create(name: 'Ryszard', result: -8.7, created_at: 24.days.ago)

Result.create(name: 'Basia', result: -5.8, created_at: 26.days.ago)
Result.create(name: 'Jacek', result: -11.4, created_at: 28.days.ago)
Result.create(name: 'Magda', result: -6.2, created_at: 29.days.ago)

p1.update(tags: [t1, t2, t3])
