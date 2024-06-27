import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Input } from './fields/input/Input';
import { ChevronGo } from './chevronGo/ChevronGo';
import { colors } from '@/constants/colors';
import SearchIcon from '@/assets/svgs/search.svg';
import { ThemedText } from './ThemedText';
import { Card } from './card/Card';
import { data } from '@/constants/mock';

type CompetitionPickerProps = { isVisible: boolean; onClose(): void; onSelect(e: {id:number, title:string}):void };

export const CompetitionPicker = ({
  isVisible,
  onClose,onSelect
}: CompetitionPickerProps) => {
  const [query, setQuery] = React.useState('')

  const filterData = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
  return (
    <Modal animationType='slide' transparent visible={isVisible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <ChevronGo
              backgroundColor={colors.gray50}
              iconColor={colors.black}
              direction='left'
            />
          </TouchableOpacity>
          <Input
            placeholder='Search...'
            rightIcon={<SearchIcon />}
            style={{ flex: 1, marginBottom: 0 }}
            containerStyle={{ paddingVertical: 10 }}
            onChangeText={(text)=>setQuery(text)}
          />
        </View>
        <FlatList
          data={filterData}
          ListHeaderComponent={
            <View style={{ marginVertical: 20 }}>
              <ThemedText type='title'>Competition</ThemedText>
              <ThemedText
                style={{ color: colors.gray700, marginTop: 10, lineHeight: 21 }}
              >
                An account is needed per one host. If you already have an
                account for the host of competition you want to sign up, you can
                login and register.
              </ThemedText>
            </View>
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>{
              onSelect(item);
              onClose()
            }}>
              <Card
                style={{
                  backgroundColor: colors.paleBlue,
                  paddingVertical: 30,
                }}
              >
                <Image
                  source={require('@/assets/images/card-bg.png')}
                  style={{ position: 'absolute', right: 0, bottom: 0 }}
                />
                <ThemedText
                  type='subtitle'
                  style={{ color: colors.white, marginBottom: 15 }}
                >
                  {item.title}
                </ThemedText>
                <ThemedText
                  type='defaultBold'
                  style={{ color: colors.white, marginBottom: 10 }}
                >
                  YYYY-MM-DD ~ YYYY-MM-DD
                </ThemedText>
                <ThemedText style={{ color: colors.faintBlue }}>
                  Pyeongchang, Gangwon-do, Korea
                </ThemedText>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => `${index}-key`}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, marginHorizontal: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
