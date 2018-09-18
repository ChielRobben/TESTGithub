name = input('enter you name: ')

print ('Hallo ' + name + ',' + ' met dit programma kan je het gemiddelde van je cijfers en je beloning zien.')
print()
cijferCSN = float(input( 'Voer je cijfer in voor CSN: '))
cijferPROG = float(input( 'Voer je cijfer in voor PROG: '))
cijferICOR = float(input( 'Voer je cijfer in voor ICOR: '))
print()
Gemiddelde =  str ((cijferCSN +cijferPROG  +cijferICOR ) / 3.0)
Totaal = str (cijferCSN +cijferPROG  +cijferICOR)

print ( 'je gemiddelde is een ' +  Gemiddelde  + '.')

if float(Gemiddelde) >= 5.5:
    print ('Gefeliciteerd je gemiddelde is een voldoende!')
else:
    print ('Helaas je gemiddelde is niet voldoende!')
print()
beloning = str(float(cijferCSN +cijferPROG  +cijferICOR ) *30)
print ('je hebt een totaal aantal punten van ' + Totaal +', dat levert een beloning op van '+  beloning + ' euro!')












